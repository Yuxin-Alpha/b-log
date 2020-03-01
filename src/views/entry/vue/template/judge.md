## 标签判断

我们知道，在使用Vue的过程中我们是可以自定义标签的，那么怎么判断这个标签呢?如果我们把每一个html的标签都放到一个数组里面，每判断一个标签，就把数组循环一遍，这样的性能是很低的，Vue中使用了函数柯里化的思想，对这个实现进行了优化。

```js
let tags = 'div,p,span,h1,h2,ul,li,canvas'

function makeMap(tagStrings) {
  let tagList = tagStrings.split(',')
  let set = {}
  tagList.forEach(key => {
    set[key] = true // => { div: true, p:true ...  }
  })
  return function(tagName) {
    return !!set[tagName]
  }
}
```