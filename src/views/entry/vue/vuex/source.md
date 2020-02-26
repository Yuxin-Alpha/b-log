## Vuex源码

我们先来看一下Vuex最简单的使用方法

```javascript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { count: 100 },
  mutations: {},
  actions: {},
})

// main.js中
import store from 'store'
new Vue({
  // ...
  store
  // ...
})

```

可以看到由于Vuex可以被当做插件来use，所以其中一定包含install方法，再加上后面的new运算符，那么这个插件里面还包含一个Store这样的构造函数：

```javascript
let Vue
class Store {}
let install = (_Vue) => {
  Vue = _Vue
}
export default {
  Store, install
}
```

基本的架子搭起来了，进一步分析，vuex的最基本的功能是将其state属性注入到每一个组件里面，每一个组件中可以通过this.$store来获取vuex的实例，因此我们可以想到mixin函数来混入：

```javascript
// vuex.js中
let install = (_Vue) => {
  Vue = _Vue
  Vue.mixin({
    // 在组件的data生成之前向组件挂载$store
    beforeCreate() {
      // 根组件 与 子组件分别, 由于vue的组件生成的顺序，可以逐层深度遍历
      if(this.options && this.$options.store) {
        this.$store = this.$options.store
      } else {
        this.$store = this.$parent && this.$parent.$store
      }
    }
  })
}
```

+ state

将$store注入到每个组件之后，我们则可以通过.state的方式获取state中的属性

```javascript
// vuex.js中
import Vue from 'vue'
class Store {
  // state是通过构造函数的参数对象的其中一个属性传进来的
  constructor(options) {
    let state = options.state
    // 为了让state中的数据是响应式的，这里是Vuex的核心
    this._vm = new Vue({
      data: {
        state
      }
    })
  }
  get state() {
    return this._vm.state
  }
} 
```

+ getters

我们通过生成一个vue实例来让vuex中的state变成响应式的属性之后，我们可以进一步实现vuex中的计算属性getters的逻辑。getters里面存放的其实是一个个函数，然后通过`this.$store.getters`来获得：

```javascript
// vuex.js中
import Vue from 'vue'
class Store {
  // state是通过构造函数的参数对象的其中一个属性传进来的
  constructor(options) {
    // ...state实现
    this.getters = {}
    if(options.getters) {
      let getters = options.getters
      forEach(getters, (getterName, getterFn) => {
        // 由于getters是根据属性变化的，所以要在此劫持
        Object.defineProperty(this.getters,getterName,{
          get: () => {
            return getterFn(state)
          }
        })
      })
    }
  }
} 
// 工具函数，向将一个对象的所有方法拷贝到另一个对象上
function forEach(obj, callback) {
  Object.keys(obj).forEach(item => callback(item, obj[item]))
}
```

+ mutation

我们修改store中的数据，需要通过commit函数来提交，同样也是通过options上面的mutations来存放不同的方法：

```javascript 
// vuex.js中
class Store {
  constructor() {
    // ...state的处理
    // ...getters的处理
    this.mutations = {}
    let mutations = options.mutations
    forEach(mutations, (mutationName, mutationFn) => {
      this.mutations[mutationName] = () => {
        mutationFn.call(this, state)
      }
    })
    // 先将原型上面的方法存起来
    const { commit, dispatch } = this
    this.commit = (type) => {
      commit.call(this, type)
    }
    this.dispatch = (type) => {
      dispatch.call(this, type)
    }
  }
  commit(type) {
    this.mutations[type]()
  }
} 
```

+ actions

与mutations同理：

```javascript 
// vuex.js中
class Store {
  constructor() {
    // ...state的处理
    // ...getters的处理
    // ...actions的处理
    this.actions = {}
    let actions = options.actions
    forEach(actions, (actionName, actionFn) => {
      this.actions[actionName] = () => {
        actionFn.call(this, this)
      }
    }) 
  }
  dispatch(type) {
    this.actions[type]()
  }
} 
```