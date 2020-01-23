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