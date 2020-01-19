## 数组拓展
<strong>Object.defineProperty</strong>的缺陷是不能对数组进行监听，举个例子:

```javascript
const obj = {
  list: [1, 2, 3]
}

obj.list = [] // 触发视图更新
obj.list = [1, 2] // 触发视图更新
obj.list.push(5) // 不能触发视图更新
```

如果单纯使用劫持函数的话，我们的数组属性触发视图更改的方法只能通过给其赋值新的数组，这样非常地麻烦，所以要解决这个问题，我们需要对数组的一些方法进行重新定义(aop思想):

```javascript
// 获取数组原型
let arrProto = Array.prototype

// 声明对象继承数组原型
const proto = Object.create(arrProto)

const methodsList = ['push', 'pop', 'shift', 'unshift', 'splice', 'reverse', 'sort']
function update() {
  console.log('视图更新');
}

// 对数组原型的方法进行调用劫持，在不改变原来的功能的前提下添加新功能
methodsList.forEach(item => {
  proto[item] = function() {
    update();
    // 原有功能
    arrProto[item].call(this, ...arguments)
  }
})
let list  = [1, 2, 3]
// 修改Array类型的原型
list.__proto__ = proto
list.push(5) // 视图更新
```