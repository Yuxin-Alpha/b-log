## 拷贝
拷贝在我们平时写代码或者面试的时候都是常客，拷贝通常分为浅拷贝和深拷贝，当然，深浅之说是针对对象来说的，我们知道，在Javascript中，对象又称引用类型，它在计算机中的存储位置是堆，我们可以通过一个变量名找到的一个对象，这个变量其实存储的是这个对象在堆中的地址，那么这样就会产生一个问题：

```javascript
const objOne = {
	name: 'Java'
}

const objTwo = objOne
objTwo.name = 'Node'
console.log(objOne.name) // 'Node'
```

这是非常常见的现象，当我们简单地通过变量名传递对象的时候，其实传递的是对象的地址，这样`objOne`与`objTwo`内部存储的，其实同一个对象的地址，通过其中一个变量对对象的属性修改，就是对堆中唯一的这个对象进行修改，那么怎么做到像复制一个普通类型的变量来在堆中复制一个新的对象，跟目标对象属性和值一样，但是地址不一样呢，这就要引出了拷贝的概念。

### 浅拷贝
什么是浅拷贝呢？我们先放下这个问题。通常我们实现一个对象拷贝有下面几种方法：
```javascript
// ...运算符
const arr = [1, 2]
const newArr = [...arr]
const obj = { name: 'Kevin' }
const newObj = { ...obj }

// Object.assign()
const objOne = Object.assign({}, obj)
```

上述两个拷贝都存在一个问题，属性类型是普通类型的时候，确实有一份新的拷贝，但是当我们修改一下目标对象：
```javascript
const obj = { person: { name: 'Bob' } }
```

当我们再通过上面的方法进行拷贝，会发现，当我们通过`person`属性去修改`person`的`name`时，新旧对象里面的`person`属性中的`name`属性还是一起被修改了，所以当我们拷贝的对象中存在值为引用类型的属性时，这种拷贝的方法就不能达到最终的需求了，这种处理一层拷贝对象的拷贝方法，我们叫做浅拷贝。

### 深拷贝
对应的，深拷贝就是能够解决多层对象的拷贝问题。
+ JSON 方法

```javascript
JSON.parse(JSON.stringify(obj))
```

这个是我们平时比较常用的深拷贝方法，但是这个方法是有缺陷的，当我们的对象包含'特殊'的值时，就会出现问题：

```javascript
const obj = {a: undefined, b: function() {}}
```

我们再通过JSON方法来拷贝的时候，发现只剩`{}`，也就是说，JSON方法在拷贝的时候，并不能将所有的属性进行拷贝，特殊值会直接忽略。
因此我们来实现一个深拷贝函数：

```javascript
// 符合这个类型都应原值返回
isSimpleType(value) {
	// undefined == null  之所以没有用 === ,这样可以将这两个值一起判断
	return (obj == undefined) || (typeof obj !== object) || (obj instanceof RegExp)
}
function deepCopy(obj) {
	if(isSimpleType(obj)) return obj
	if(obj instanceof Date) return new Date(obj)
	// 现在只剩下数组和对象，这两个的判断可以合并处理
	const newObj = (new obj.constructor)
	for(let key in newObj) {
		newObj[key] = deepCopy(obj[key])
	}
	return newObj
}
```
