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
接下来我们需要解决Promise的链式调用的问题，与jquery的链式调用不同，Promise执行then方法后，说明状态就改变了，如果继续返回this来获取原来的Promise，那么状态就无法改变了，所以这个时候我们要返回一个新的Promise，这样又是一组新的状态：

```javascript
// ...
Promise.prototype.then = function(onFulfilled, onRejected) {
  let newPromise
  newPromise = new Promise((resolve, reject) => {
    if(self.status === 'fulfilled') {
      let x = onFulfilled(self.data)
      try {
        resolve(x)
      } catch(e) {
        reject(e)
      }
    }
    if(self.status === 'rejected') {
      let x = onRejected(self.reason)
      try {
        resolve(x)
      } catch(e) {
        reject(e)
      }
    }
    if(self.status === 'pending') {
      // 成功后需要执行的函数
      self.onResolveCallbacks.push(function() {
        let x = onFulfilled(self.data)
        try {
          resolve(x)
        } catch(e) {
          reject(e)
        }
      })
      // 失败后需要执行的函数
      self.onRejectedCallbacks.push(function() {
        let x = onRejected(self.reason)
        try {
          resolve(x)
        } catch(e) {
          reject(e)
        }
      })
    }
  }) 
  return newPromise
};
```

我们通过return一个新的Promise来进行链式调用，然后通过resolve函数将then中的返回结果或者错误传递给下一个then方法中的回调函数，这个时候还需要解决一个返回值类型的问题，也就是一个then中的返回结果可能是一个普通值，当然也有可能是一个Promsie对象，如果是普通值，我们可以直接抛出，如果是Promise对象，我们就需要采取当前promise的状态了。

```javascript
function resolvePromise(promise, x, resolve, reject) {
  // 首先要处理循环引用的问题
  if(promise === x) {
    return reject(new TypeError('循环引用'))
  }
  // 判断一个x是不是promise
  if(typeof x === 'function' || (typeof x === 'object' && x !== null)) {
    // 尝试取当前x的then方法，这个then方法可能别人定义的时候用的
    try {
      let then = x.then
      if(typeof then === 'function') {
        then.call(x, y => {
          resolvePromise(promise2, y, resolve, reject)
        }, r => {
          reject(r)
        })
      } else {
        // 普通对象
        resolve(x)
      }
    } catch(e) {
      reject(e)
    }
  } else {
    resolve(x)
  }
}

```

此时还差最后一步：就是，promise可以像以下这种方式调用
> promise.then().then().then(y => { console.log(y) })

这时我们就需要在then函数的第一步先

```javascript
//...
then(onFulfilled, onRejected) {
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
  onRejected = typeof onRejected === 'function' ? onRejected : err => { throw new Error(err) }
  // ...
}
```

接下来，我们再实现一下Promise的常用Api

```javascript
Promise.prototype.catch = (rejectFunc) => {
  return this.then(null, rejectFunc)
}

Promise.resolve = (data) => {
  return new Promise((resolve, reject) => {
    resolve(data)
  })
}

Promise.reject = (reason) => {
  return new Promise((resolve, reject) => {
    reject(reason)
  })
}

Promise.all = (values) => {
  return new Promise((resolve, reject) => {
    let results = []
    let i = 0
    let processData = (value, index) => {
      results[index] = value
      if(++i === results.length) {
        resolve(results)
      }
    }
    for(let i = 0; i < values.length; i++) {
      let current = values[i]
      if(isPromise(current)) {
          current.then(data => {
            processData(data, i)
        }, reject)
      } else {
        processData(current, i)
      }
    }
  })
}
```