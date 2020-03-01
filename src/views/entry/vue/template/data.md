## 数据解析

Vue在渲染页面的时候，其实会先获取我们页面的DOM片段，也就是一个Vue组件要挂载的目标，然后对这段模板进行解析，将里面相关的数据或者指令进行解析，然后替换或者依赖收集，这一小节，我们来实现以下对数据，也就是对{{name}}这种模板语法的数据替换。

```javascript
let temNode = document.getElementById('root')

let data = {
  name: '一个新的name',
  message: '一个消息'
}

let reg = /\{\{(.+?)\}\}/g

function compiler(template, data) {
  // 在Vue的源码中是字符串，然后转化成抽象语法树，最后转化成虚拟DOM
  let childNodes = template.childNodes
  for(let i = 0; i < childNodes.length; i++) {
     // 判断节点类型，1表示元素，3表示文本节点
    let type = childNodes[i].nodeType
    if(type === 3) {
      // 该属性只有文本节点才有
      let text = childNodes[i].nodeValue
      // 匹配{{}}
      text = text.replace(reg, function(_, g) {
        let key = g.trim()
        return data[key]
      })
      childNodes[i].nodeValue = text
    } else if(type === 1) {
      // 递归
      compiler(childNodes[i], data)
    }
  }
}

compiler(tempNode, data)
```

接下来我们整合一下代码，按照Vue的使用方式封装一下：

```javascript
function MyVue(options) {
  this._data = options.data
  this._el = options.el
  this._templateDOM = document.getElementById(this._el)
  this._parent = this._templateDOM.parentNode
  this.render()
}

MyVue.prototype.render = function() {
  this.compiler()
}
MyVue.prototype.complier = function() {
  let realHTMLDOM = this._templateDOM.cloneNode(true)
  // compiler 在上文中声明过了
  compiler(realHTMLDOM, this._data)
  this.update(realHTMLDOM)
}
MyVue.prototype.update = function(real) {
  this._parent.replace(real, this._templateDOM)
}
```

这里需要注意一个问题：{{person.name.firstName}}这样的语法是没有处理的，所以需要特殊处理一下

```javascript
function getValueByPath(obj, path) {
  // 将person.name.firstName 转化成['person', 'name', 'firstName']
  let paths = path.split('.')
  let res = obj
  let prop
  while(prop = paths.shift()) {
    res = res[prop]
  }
  return res
}
```
