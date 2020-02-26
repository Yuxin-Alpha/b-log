## Message实现

本章主要介绍一下Vue插件的编写原理，在介绍之前我们先了解一下我们常用的ElementUI中的Message的用法
> this.$Message.info{
  message: '这是一段文本',
  duration: 3000
}

如果我们也想要封装一个这样的组件应该怎么做呢？

首先，我们先声明一个弹框的组件

```html
<template>
  <div v-if="messages.length">
    <div v-for="m in messages" :key="m.id">
      {{ m.message }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { messages: [] }
  },
  mounted() {
    this.id = 0
  },
  methods: {
    add(options) {
      let id = this.id++
      let layer = { ...options, id }
      this.messages.push(layer)
      let layer.timer = setTimeout(() => {
        this.remove(layer)
      }, options.duration)
    },
    remove(layer) {
      clearTimeout(layer.timer)
      this.messages = this.messages.filter(message => message.id !== layer.id)
    }
  }
}
</script>
```

有了组件，我们怎么使用js函数的方式来调用我们的组件呢？

```javascript
import Vue from 'vue'
import MessageComponent from './Message.vue'
// Message.js文件
let getInstance = () => {
  // 产生一个vue实例，放到内存中
  let vm = new Vue({
    render: h => h(MessageComponent)
  }).$mount()
  // 在页面中添加
  document.body.appendChild(vm.$el)
  // 获取当前的Message实例
  let component = vm.$children[0]
  // 保留this指向
  return {
    add(options) {
      component.add(options)
    }
  }
}
export const Message = {
  info(options) {
    getInstance().add(options)
  }
}
```

下一步，我们需要使用Vue.use(Message)来使用这个插件，这样我们就可以通过上述的this.$Message的方式来调用我们的组件了。

```javascript
// Message.js中

// ... 省略部分代码

let _Vue
export default {
  // 需要注意的是，使用Vue.use的参数，必须是拥有install方法的对象
  install(Vue, options) {
    // Vue表示Vue的构造函数，options 表示Vue.use的第二个参数
    if(!_Vue) {
      // 防止用户多次use
      _Vue = Vue
      let $Message = {}
      Object.keys(Message).forEach(type => {
        $Message[type] = Message[type]
      })
      _Vue.prototype.$Message = Message
    }
  }
}
```

这就是写一个插件的大致原理。