## Promise

es6中，提出了promiseA+的规范，也是社区比较常用的异步解决方案。我们先来看看基本的使用方法。

```javascript
let p = new Promise(() => {
  setTimeout(() => {
    resolve(100)
  }, 1000)
})

p.then(res => {
  console.log(`一秒后获得结果${res}`)
})
```
