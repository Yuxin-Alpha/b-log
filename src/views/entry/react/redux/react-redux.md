## react-redux

我们知道，如果我们在写项目的时候，只使用redux这个库，会非常麻烦，我们需要在组件中手动引入store，然后其在其生命周期函数中手动获取store中的属性，然后手动订阅并且取消订阅，如果我们项目中有很多组件，那么重复的代码会非常多，这样非常不合理，所以我们通常会借助react-redux这个库来代替我们上述的需要自己手动完成的操作。

```javascript
// main.js中
// ...省略react相关库的引入 
import store from './store'
import { Provider } from 'react-redux'

// 通过Provider组件将store注入到App组件中，使得App组件的所有子组件都能连接store
ReactDOM.render((<Provider store={store}>
	<App></App>
</Provider>), document.getElementById('root'))

// App.js文件中

// ...省略部分react引入
import actions from '../store/actions'
import { connect } from 'react-redux'
class App extends Component {
	// ...省略组件逻辑代码

	const { num, add } = this.props
}

// 将store中的state映射为组件中的属性，挂载到props上面，组件可以按需索取
const mapStateToProps = state => ({num: state.number})

 // 将actions映射为props上的属性
const mapDispatchToProps = actions

// 将store与App组件连接，当我们实例化组件之后就是与store连接之后的组件了
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)
```

我们明白了大致的使用过程之后，来分析一下源码：

```javascript
import 
```