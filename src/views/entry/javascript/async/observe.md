## 观察者模式

观察者模式是由发布订阅衍生出来的一种设计模式，设计思想很相似，被观察者的状态更新，会通知观察者，与发布订阅不同的是，发布订阅两者是没有关联的，事件发射器触发`emit()`是为了让`on()`订阅的函数执行，仅此而已，观察者模式中，观察者与被观察者有紧密的联系，观察者想要更新自己的状态，都需要由被观察者修改了状态之后来更新。我们随意来实现一个观察者模式的场景：有一个婴儿，他的父母看到他笑了，那么他的父母就高兴，反之，他哭了，他的父母就着急。

```javascript
// 被观察者
class Observe {
  constructor() {
    // 被观察者初始化状态
    this.state = '睡觉'
    // 存储观察者的数组
    this.subs = []
  }
  setState(state) {
    this.state = state
    this.subs.forEach(item => {
      item.update(this.state)
    })
  }
}
// 观察者
class SubObj {
  constructor(name) {
    this.name = name
    this.state = ''
    
  }
  // 观察者的更新函数，由被观察者的状态更新函数触发
  update(state) {
    this.state = state
    console.log(`${this.name}也${this.state}了`)
  }
}

const daddy = new SubObj('daddy')
const mami = new SubObj('mami')
const baby = new Observe()
// 将观察者添加进被观察者的订阅数组，使两者产生关联
baby.subs.push(daddy)
baby.subs.push(mami)
baby.setState('sad')
setTimeout(() => {
  baby.setState('happy')
}, 3000)
```

看过本章和上一章的代码之后，我们可以清楚地发现发布订阅与观察者模式的明显区别，相同之处当然是通过数组保存订阅函数或者观察者，但是发布订阅中，这个事件发射器`EventEmitter`就像一个中间层一样，不管是发布还是订阅都要经过这个事件发射器，而观察者模式下，观察者状态的更新完全由被观察者决定，没有任何中间层帮助。这两种设计模式很好地解决了我们原先提出的并发执行异步操作和回调地狱问题，但是没有完美的东西，如果我们现在设计这样的需求，我们要发送一个异步请求，但是请求里面的url在一个文件里面，所以我们必须要先读取这个文件取出url，再发送请求，这两个操作也是常见的异步操作，只不过有了先后顺序，而且这两个操作都是有可能出现错误的，因此为了让异步操作有顺序地执行，又不产生回调地狱，`Promise`出现了