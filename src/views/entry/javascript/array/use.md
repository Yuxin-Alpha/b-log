## 使用拓展
+ 解决一个问题：在不更改原有功能的基础之上，融合更多功能
```javascript
const methodArr = ['push', 'pop', 'shift', 'join']
function printItem(value) {
	console.log(`我当前操作的是${value}`)
}
methodArr.forEach(method => {
	let oldMethod = Array.prototype[method]
	Array.prototype[method] = function() {
		printItem(...arguments)
		oldMethod.call(this, ...arguments)
	}
})
```
我们可以用这样的方法封装原生方法，让数组的方法可以在不影响原有功能的基础上自定义。这是一种开发思想，在Vue中对数组方法的监听就是使用这种写法。