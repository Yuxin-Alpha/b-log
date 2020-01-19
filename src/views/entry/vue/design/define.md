## 数据劫持

Vue的是靠数据劫持来对<strong>data</strong>里面的每个属性进行取值和赋值的重新定义，重新定义的方法就是靠<strong>Object.defineProperty</strong>方法。我们先来简单实现一下这个功能。

```javascript
const obj = {
	name: 'Jack',
	position: {
		address: 'some area',
		date: '2012.08.30'
	}
}

function update() {
	console.log('视图更新') 
}

function observe(target) {
	if(target === null) {
		throw new Error(`${target} 不是一个对象`)
	}
	Object.keys(target).forEach(key => {
		observe(target[key])
		Object.defineProperty(target, key, {
			get() {
				return target[key]
			},
			set(newValue) {
				update()
				target[key] = newValue
			}
		})
	})
}
```