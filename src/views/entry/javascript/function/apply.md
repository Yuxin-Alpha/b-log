## call & apply

call函数是挂载在<strong>Function.prototype</strong>的一个方法，作用就是修改函数原来函数的this指向。

```javascript
Function.prototype.myCall = function(self) {
	let context = self ? Object(self) : window
	// 保留原来的函数
	context.fn = this
	let args = []
	for(let i = 0;i < arguments.length;i++) {
		args.push('arguments['+i+']')
	}
	let r = eval('context.fn('', '')')
}

```