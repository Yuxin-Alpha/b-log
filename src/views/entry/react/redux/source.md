## 源码

本章会重点介绍一下redux的源码，详细的使用文档请参阅redux官方文档以及对应的github。

我们先来回忆一下redux的工作流程。redux强调单项数据流，也就是说，组件通过订阅store来获取store中的数据，通过向store中派发action来通知redux修改store中的数据，redux会对这个action进行判断，如果属于合法的action，也就是说在reducer中有预先的定义，那么reduce内部会修改数据，然后通知订阅了这个数据的组件。
笔者把redux比作一个学校图书馆，把学生比作是一个个组件，图书馆里的存书就是一个个数据，一个图书馆当然需要个管理员，来处理学生的借书，还书，或者查询操作，这个管理员其实就是reducer，而前面提到的借书和还书等操作就是组件派发出的action。理清了这个思路我们先来简单使用一下redux。

```javascript
import { createStore } from 'redux'

const ADD = 'ADD'

let initialState = 0
// 
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return state + 1
    default:
   return state
  }
}

let store = createStore(reducer, initialState)

console.log(store.getState())

function render() {
  console.log('渲染一下')
}
store.subscribe(render)
```

redux的原理和思想其实非常好理解，没有必要做特殊的讲解，我们来把重点放到源码的实现上吧。

我们看到使用之后就发现，store是通过createStore函数生成的，store中有getState，subscribe，dispatch函数。因此我们先来实现这个createStore函数

```javascript
function createStore(reducer, preloadedState) {
  if(typeof reducer !== 'function') {
    throw new Error('reducer必须是一个函数')
  }
  let currentState = preloadedState
  let currentReducer = reducer
  let currentListeners = []
  function getState() {
    return currentState
  }
  function dispatch(action) {
    if(!isPlainObject(action)) {
      throw new Error('动作必须是一个纯对象')
    }
    if(action.type === undefined) {
      throw new Error('action中必须包含type属性')
    }
    currentState = currentReducer(currentState, action)
    return action
  }
  function subscribe(fn) {
    // 利用闭包优化，使得取消订阅的函数只执行一次
    let subscribed = true
    currentListeners.push(fn)
    return function unsubscribe() {
      if(!subscribed) return 
      const index = currentListeners.indexOf(fn)
      currentListener.splice(index, 1)
      subscribed = false
    }
  }

  return {
    getState,
    subscribe,
    dispatch
  }
}
 // 必须是纯对象，不能是通过new操作符返回
function isPlainObject(action) {
  if(typeof obj !== 'object' || obj === null) {
    return false
  }
  let proto = obj
  // 一直找到Object.prototype
  while(Object.getPrototypeOf(proto)) {
    proto = Object.getPrototypeOf(proto)
  }
  return Object.getPrototypeOf(obj) === proto
}
```