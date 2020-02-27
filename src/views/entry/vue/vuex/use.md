## Vuex

`Vuex` 是针对 `Vue` 量身定制的一套数据流框架，主要解决就是跨级组件之间数据传递复杂的问题，其中核心的思想，就是将一些组件之间共用的数据集中到统一的地方，同时暴露出相应的api来供组件获取，修改。

### 成员

+ state : 公用数据的管理中心
+ getter : 用来对state里面的数据进行再加工，产生新的数据（类似于组件中的computed）
+ mutation : 存放了一系列修改state的动作
+ action : 存放一系列异步动作

需要强调的是，`Vuex` 属于单项数据流，组件可以通过state来直接获取公共数据仓库的数据，但如果要修改数据，必须提交mutation，然后再mutation中定义修改的动作，如果我们做了请求操作，我们需要先派发action，然后在数据返回之后再调用mutation中的动作，以此来修改数据。

### 生成

```javascript
// store/index.js中
import Vue from 'vue'
import vuex from 'vuex'
// ... state, mutations, getters, actions 的引入
Vue.use(vuex)

export default new vuex.Store({
	state, mutations, actions, getters
})

// main.js 中 注册state

import store from './state'
new Vue({
	store
	//...
})

```

生成之后我们就可以通过 `this.$store.state` 来获取state中的属性

### 分模块

如果我们想要规范的管理state，有时想要构建不同的子状态存储库，最后再通过state集成所有的模块，可以使用module来分块处理不同业务的公用状态。

```javascript
// store/module/user.js
export default {
	// 注意：这里要添加这个配置项，将当前module变成一个模块
	namespaced: true
	state: {
		nameName: '测试'
	},
	mutations: {},
	getters: {},
	actions: {}
}

// store/index.js
import user from './module/user.js'
export default {
	module: {
		user
	}
	//...
}
```

接下来我们就可以通过 `this.$store.state.user` 来获得user模块下的公共数据。

### map 操作

我们发现如果每次我们都要使用 `this.$store.state` 这样的方式来调用store里面的数据，不仅代码不好看，而且很麻烦，因此vuex为我们提供了一系列的map函数，使得我们可以在组件中按需对我们需要的state||mutation||action||getter进行映射获取。

+ mapState

```javascript
import { mapState } from 'vuex'

export default {
	// ...部分vue代码
	computed: {
		// 获取state模块下面的lesson
		...mapState(['lesson'])
		// 获取user子模块下面的userName,如果模块中的namespaced属性不是true,那么这种方法是不能获取到user模块的
		...mapState('user', ['userName'])
	}
}

// 如果我们想要更加细化我们的模块，我们可以换一种写法，让一个组件对应一个自己的state

// User.vue下
import { createNamespacedHelpers } from 'vuex'
// 直接生成对应user模块的mapState函数
const { mapState } = createNamespacedHelpers('user')

export default {
	// ...部分vue代码
	computed: {
		...mapState(['userName'])
		// 如果想要在组件中声明一个新的变量名
		...mapState({
			u: state => state.userName
		})
	}
}
```

+ mapMutations

```javascript
// 
```

+ mapActions

```javascript
// 
```