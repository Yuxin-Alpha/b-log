## JSX

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(<h1>simple test</h1>, document.getElementById('root'))
```

注意上面代码中奇怪的语法现象——<strong>\<h1>simple test\</h1></strong>，这一段其实是我们常说的`JSX`表达式，当然浏览器是不识别这样的语法的，需要`Babel`工具的转义，转义之后变成下面的代码：

```javascript
ReactDOM.render(React.createElement('h1', null, 'simple test'), document.getElementById('root'))
```

我们打印这个<strong>React.createElement('h1', null, 'simple test')</strong>的返回值，发现它就是普通的js对象，也就是一个`React`元素，描述了一个DOM标签

```javascript
{
  $$typeof: Symbol(react.element),
  key: null,
  props: {
    children: "simple test"
  },
  ref: null,
  type: 'h1'
}
```

所以我们来探究一下这个函数：

```javascript
function createElement(type, config={}, children) {
  let propName
  const props = {}
  for(propName in config) {
    props[propName] = config[propName]
  }
  let childrenLength = arguments.length - 2
  if(childrenLength === 1) {
    props[children] = children
  }
  if(childrenLength > 1) {
    props[children] = Array.from(arguments).slice(2)
  }
  return ReactElement(type, props)
}

function ReactElement(type, props) {
  const element = {type, props}
  return element
}

class Component {
   // 用来区分类组件和函数组件
  static isReactComponent = true
  constructor(props) {
    this.props = props
  }
}
```

如此我们就产生了一个React元素，这个时候我们要考虑一下这样的一个React元素怎么渲染到页面上。