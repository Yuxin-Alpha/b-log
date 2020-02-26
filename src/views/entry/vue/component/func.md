## 函数式组件

函数式组件的概念其实是react中提出的，当然在vue中也有很多实用场景，本节会介绍几个函数式组件的案例，但是在此之前，我们需要先介绍vue中一个比较重要的api——render函数。

### render

这个函数是vue框架中自带的渲染函数，是vue实例上的一个方法，具体的使用是：

```javascript
new Vue({
  // ...
  render: h => h(App)
})
```

### 案例

假设我们现在有一个需求：

```html
<template>
  <div>
    <MyTitle :type="2"></MyTitle>
  <div>
</template>
```

我们现在需要一个MyTitle组件，接收一个type属性，当type是2的时候，我想让这个组件返回一对\<h2>\</h2>标签，当type是3的时候返回一对\<h3>\</h3>标签，有的人可能会想，我在MyTitle组件中做一系列的v-if的判断，就像这样：

```html
<template>
  <div>
    <h1 v-if="type===1"></h1>
    <h2 v-if="type===2"></h2>
    <h3 v-if="type===3"></h3>
  <div>
</template>
<script>
export default {
  props: ['type']
}
</script>
```

这样的写法当然能满足我们的需求，而且是完全满足，但是，这部分代码冗余的部分太多了，而且不够灵活，因此我们可以想到使用函数，让可变的type作为函数的参数，返回值会依据参数变化，不仅精简了代码，而且复用性极强。那么怎么实现一个函数式组件呢？
我们知道，一个Vue文件最后都会被vue-loader插件转换成一个js对象也就是虚拟dom，然后挂载到页面中进行渲染，如此我们先声明一个对象。

```javascript 
// MyTitle.js文件
export default {}
```

然后在组件中直接引用

```html
<template>
  <div>
    <MyTitle :type="2"></Mytitle>
  <div>
</template>
<script>
import MyTitle from './MyTitle.js'
export default {
  components: { MyTitle }
}
</script>
```

当然这个时候，浏览器会报错，告诉我们MyTitle组件缺少template或者render属性，所以我们继续修改MyTitle.js文件，

```javascript
export default {
  // 标志为函数式组件
  functional: true
  // 注意，参数h是必须要写的，context用来获取这个组件的上下文
  render(h, context) {
    console.log(context)
    return <span>123</span>
  }
}
```

这时，页面上面就成功渲染了123，打开控制台，我们会发现，props属性中有一个{ type: 2 }，所以这个时候我们就可以进一步编写我们的逻辑。

```javascript
export default {
  functional: true
  render(h, context) {
    let t = 'h' + context.props.type
    return <t></t>
  }
}
```

这样我们就可以在页面中看到一对\<h2>\</h2>标签。