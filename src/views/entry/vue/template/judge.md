## 标签判断&缓存

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

观察上面的代码，大家应该发现了，我只需要循环一遍，生成一个集合，就能进行无数次的标签判断，而且每一次标签的判断操作的复杂度都是O(1)，这里就引入了缓存的概念。

我们看一下上一节虚拟DOM的代码，其实不难发现，我们无论是挂载，还是数据变化，都会默认执行一次render方法，render方法里面有进行了complier操作，这也是非常消耗性能的，其实我们渲染的模板是不需要改变的，需要改变的只是数据，所以，当我们把模板挂载到页面中的时候，当我们的数据再进行更改的时候，模板的挂载就不应该在此发生了，我们需要做的知识更换数据，所以，我们就把思路变换成将虚拟DOM进行缓存，然后数据更新的时候进行虚拟DOM的比对，最后再更换真实的DOM，而不是每次都去把所有的真实DOM都替换一次。

```javascript
function MyVue(options) {
  this._data = options.data
  this._el = options.el
  // 挂载
  this.mount()
}
MyVue.prototype.mount = function() {
  this.render = this.createRenderFn()
  this.mountComponent()
}
MyVue.prototype.mountComponent = function() {
  let mount = () => {
    this.update(this.render())
  }
  mount.call(this)
}
// 生成render函数，目的是缓存 抽象语法树
MyVue.prototype.createRenderFn = function() {
  return combine() {}
}

// 将虚拟DOM渲染到页面中，也就是常说的diff算法
MyVue.prototype.update = function() {}
```