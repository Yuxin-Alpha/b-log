## React Hooks
在`React v16.8`之前我们书写组件大部分是采用`class Component`的形式，虽然函数式组件很早就提出了，开发者可以通过
```javascript
const ComOne = (props) => {
  const { name } = props
  return <div> 我是{ name }组件 </div>
}
```
这样的形式来声明一个函数式组件，但是这个组件是没有生命力的：
+ 没有自己的数据状态，也就是说没有自己的`state`
+ 没有自己的生命周期函数，这就导致很多异步逻辑不能在函数式组件书写，只能在类组件中书写

由于函数式组件原先的这两个问题，它只能通过`props`属性做UI数据的渲染，而不能用来处理业务，我们又叫它'傻瓜组件'。

说回类组件，它也有比较明显的短板：
+ 一个很小的组件也需要写声明类组件必须要写的格式，比如对`Component`的继承，`render()`，这样会让代码看起来很'重'，明明写了很多行，其实只是用来渲染一段文本。
+ 组件之间复用状态很难
+ 如果我们组件中引入定时器的逻辑，那么需要在<strong>componentDidMount</strong>和<strong>componentWillUnmout</strong>中分别定义和卸载，这样也就将一个业务分别处理在不同的生命周期中。
+ this指向的问题

在React中有多种方法解决事件调用时`this`丢失的问题

```javascript
class BtnComponent extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      num: 1,
      title: ' react study'
    };
    this.handleClickBind = this.handleClick1.bind(this);
  }
  handleClick1() {
    this.setState({
      num: this.state.num + 1,
    })
  }

  handleClick3 = () => {
    this.setState({
      num: this.state.num + 1,
    })
  };

  render() {
    return (<div>
      <h2>Ann, {this.state.num}</h2>
      <button onClick={this.handleClick1.bind(this)}>btn1</button>
      <button onClick={this.handleClickBind}>btn2</button>
      <button onClick={() => this.handleClick1()}>btn3</button>
      <button onClick={this.handleClick3}>btn4</button>
    </div>)
  }
}
```

+ `btn1`的处理方法是在页面渲染的时候`bind`，这样组件每次更新，`bind()`都会执行一次，影响性能，不推荐
+ `btn2`的处理是放在了构造函数中进行，这样`bind()`只会在刚生成的时候进行绑定，而且只有一次
+ `btn3`在`jsx`中放入箭头函数，这样组件每次更新也会生成一个新的箭头函数，同样不推荐
+ `btn4`是静态属性的写法，原理跟`btn2`差不多，属于比较新的语法，也是笔者在写`react`时比较喜欢使用的语法

React 为了秉承推荐的函数式组件的写法，推出了<strong>Hooks</strong>，在加强函数式组件的生命力和功能的同时，也弥补了类组件的一些短板，所以开发者们在学完hooks之后请尽量在业务中使用Hooks，告别类组件的写法。