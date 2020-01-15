## Promise

`Prosmise`在英文中是`承诺`的意思，比如我向我的老板承诺，我明天之前一定将今天提的需求完成，这就是一种承诺，承诺是对未来将要发生的事情的一种预期，当然我承诺了不一定会完成，也许可能碰巧我明天发烧了，没办法工作，那么这个承诺当然就不能完成。映射到我们的代码中，`Promise`会返回一个对象，存放着对未来的预期，我可以达到这个预期，也会因为不可抗力达不到这个预期，就像我发送一个异步请求数据，可以成功请求到数据，也可能由于断网或者目标服务器关闭，我拿不到数据，也就是说，一个`Promise`对应着成功和失败两种状态，那么针对这两种不同的状态，我们会执行不同的处理函数，这就是 Promise 的核心逻辑。
在详述 Promise 的具体实现之前，我们先了解一下`Promise`的具体用法。

```javascript
let p = new Promise((resolve, rejected) => {
	console.log("hello Promise");
	resolve(100);
});

p.then(
	res => {
		console.log(`一秒后获得结果${res}`);
	},
	err => {
		console.log(`由于${err}失败了`);
	}
);
```

经过一秒的时间，控制台成功打印了`一秒后获得结果`，捋一下思路，首先 Promise 是由一个构造函数，我们在使用的时候需要通过`new`进行实例化，然后我们向构造函数中传递了一个函数，并且这个函数是立即执行的，我们在函数执行的过程中打印了`hello Promise`后调用`resolve()`函数,`then()`方法的第一个参数，也就是传入的第一个方法就被执行了。
因此我们先根据这个思路书写一个简单的`Promise`。

```javascript
function Promise(executor) {
	// 判断一个Promise的状态，初始为pending
	this.status = "pending";
	// 成功获取的data
	this.data = undefined;
	// 失败的原因 reason
	this.reason = undefined;
	// 绑定this
	const self = this
	function resolve(data) {
		if (self.status === "pending") {
			self.status = "fulfilled";
			self.data = data
		}
	}
	function reject(reason) {
		if (self.status === "pending") {
			self.status = "rejected";
			self.reason = reason
		}
	}
	executor(resolve, reject);
}

Promise.prototype.then = function(onFulfilled, onRejected) {
	// 绑定this
	const self = this
	// 当前状态成功之后执行
	if(self.status === 'fulfilled') {
		onFulfilled(self.data)
	} 
	// 当前状态失败之后执行
	if(self.status === 'rejected') {
		onRejected(self.reason)
	}
};
```

上述代码实现了简易的`Promise`方法，但是需要注意的是，我们在`executor`函数执行的时候，这个函数可能会报错，所以我们要修改一下上面的代码。

```javascript
	// ...reject()定义
	try {
		executor(resolve, reject);
	} catch(e) {
		reject(e)
	}
	// 省略部分代码...
```

这样我们的Promise就稍微饱满了一些，但是，我们知道，Promise是一个异步解决方案，如果我们用现在我们写的这个`Promise`去处理异步代码，是不可能运行起来的，怎么解决异步的问题呢？
既然异步的代码不能马上获得结果，而是需要`Promise`的状态改变之后来获得成功的结果或者失败的原因，那么我们思考用数组来存储我们在`Promise`状态改变之后需要执行函数。

```javascript
// 省略部分代码
self.onResolveCallbacks = []
self.onRejectedCallbacks = []
function resolve(data) {
		if (self.status === "pending") {
			self.status = "fulfilled";
			self.data = data
			self.onResolveCallbacks.forEach(fn => fn())
		}
	}
	function reject(reason) {
		if (self.status === "pending") {
			self.status = "rejected";
			self.reason = reason
			self.onRejectedCallbacks.forEach(fn => fn())
		}
	}

// ...
Promise.prototype.then = function(onFulfilled, onRejected) {
	// 省略部分代码... 
	// ...
	// 异步判定
	if(self.status === 'pending') {
		// 成功后需要执行的函数
		self.onResolveCallbacks.push(function() {
			onFulfilled(self.data)
		})
		// 失败后需要执行的函数
		self.onRejectedCallbacks.push(function() {
			onRejected(self.reason)
		})
	}
};
```

这里面包含发布订阅模式，将需要执行的回调先存到数组中，然后根据状态来依次调用数组中函数。
