## 异步处理方案

我们平时在处理使用Javascript处理业务逻辑的时候，免不了要执行异步操作，由于Javascript这门语言主线程是单线程的特点，我们需要特别对待异步事件。举个例子，我们利用`fs`模块读取两个文件的内容，来获得一个`school`对象的`name`属性以及`address`属性，在获得了两个属性之后打印`school`这个对象，我们可能会书写以下的代码：

```javascript
const fs = require('fs')
const school = {}
fs.readFile('./name.txt', 'utf8', (err, name) => {
  if(err) throw err
  school.name = name
})
fs.readFile('./address.txt', 'utf8', (err, address) => {
  if(err) throw err
  school.address = address
})
console.log(school)
```

当然，上面的代码是无法得到我们的预期的，由于文件的读取不会马上得到结果，主线程会将每次读取函数里面的回调函数推进任务队列里面，而打印语句由于是同步执行的代码片段，所以这条打印语句是一个空对象。接下来，我们稍微修改一下这段代码

```javascript
// 省略相同的引入以及定义
fs.readFile('./name.txt', 'utf8', (err, name) => {
  if(err) throw err
  school.name = name
  fs.readFile('./address.txt', 'utf8', (err, address) => {
    if(err) throw err
    school.address = address
    console.log(school)
  })
})
```

首先这样实现是可以完成我们之前提出的需求的，在获取了name属性之后，继续读取address所在的文件，在获得了address属性之后，在回调函数内部打印school的内容。看似比较完美，但是这里会有两个问题：

+ 我们并没有充分利用计算机高速计算的优点，也就是说我们把计算机想成了我们自己处理多任务的状态，这两个任务是可以并行执行的；
+ 我们提出的需求是读取两个文件，如果读取的数量变多，亦或者需要更多的异步操作，那么就会形成我们常听说的回调地狱问题，代码及其难以维护。

因此社区慢慢地出现了很多针对这种异步处理的优化方案，我们来依依了解一下。
