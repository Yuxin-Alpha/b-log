## 发布订阅模式

接着上一讲的介绍继续说，一个前端比较常见的设计模式就能够很好地解决异步操作带来的问题，它就是发布订阅模式。就像我们平时生活中，如果我们喜欢某类新闻，我们可以添加进收藏，这样这类新闻出现新的文章的时候我们就可以第一时间知道。如何用代码实现呢？

我们可以这么想，订阅和发布都属于一种动作，也就是说是不同的功能，但是来源是一样的，所以我们可以写一个类或者说构造函数，在这个类中提供这两种方法，这个类就是一个事件发射器。

```javascript
const fs = require('fs')
const school = {}
function EventEmitter() {
  // 用来保存订阅函数
  this.events = []
}
// 用来触发订阅的函数
EventEmitter.prototype.emit = function() {
  this.events.forEach(fn => fn.apply(this, arguments))
}
// 用来保存订阅函数
EventEmitter.prototype.on = function(task) {
  this.events.push(task)
}

let e = new EventEmitter()
e.on((data, key) => {
  school[key] = data
  if(Object.keys(school).length === 2) {
    console.log(school)
  }
})
fs.readFile('./name.txt', 'utf8', (err, data) => {
  // 错误处理省略
  e.emit(data, 'name')
})
fs.readFile('./address.txt', 'utf8', (err, data) => {
  // 错误处理省略
  e.emit(data, 'address')
})
```

我们通过向`on()`里面传递函数来保存订阅之后的函数，一旦对象的`emit()`调用了之后，就需要执行`on()`里面保存过的函数，就像我们订阅了一个报社的报纸，一旦这个报社有了新报纸就必须送一份到我们手中是一样的道理。我们通过调用`emit()`函数来主动触发事件发射器保存的事件，在回调函数内部进行判定，这样两个读取文件的操作可以并列执行，只有当两个文件都读取完成之后，我们才能够打印出`school`对象保存的两个属性以及值。
