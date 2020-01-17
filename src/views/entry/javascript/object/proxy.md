## Proxy
英文中，proxy是代理的意思，ES6可以通过Proxy这个类似于接口的东西去代理某个对象。简单来说：`Proxy`对象就是可以让我们去对`JavaScript`中的一切合法对象的基本操作进行自定义。然后用我们自定义的操作去覆盖其对象的基本操作。也就是当一个对象去执行一个基本操作时，其执行的过程和结果是你自定义的，而不是对象的。
```javascript
let p = new Proxy(target, handler)
```

+ `target`：代理的目标对象.它可以是JavaScript中的任何合法对象.如: (数组, 对象, 函数等等)
+ `handler`：自定义操作方法的一个集合
+ `p`：经过代理包装之后的新对象

我们来再深入应用一下：
```javascript
let obj = {
  a: 1,
  b: 2,
}

const p = new Proxy(obj, {
  get(target, key, value) {
    if (key === 'c') {
      return '我是自定义的一个结果';
    } else {
      return target[key];
    }
  },

  set(target, key, value) {
    if (value === 4) {
      target[key] = '我是自定义的一个结果';
    } else {
      target[key] = value;
    }
  }
})

console.log(obj.a) // 1
console.log(obj.c) // undefined
console.log(p.a) // 1
console.log(p.c) // 我是自定义的一个结果

obj.name = '李白';
console.log(obj.name); // 李白
obj.age = 4;
console.log(obj.age); // 4

p.name = '李白';
console.log(p.name); // 李白
p.age = 4;
console.log(p.age); // 我是自定义的一个结果
```

观察代码，同样的`getter`和`setter`操作，如果不接受代理，引擎会按照`Javascript`默认的运行机制执行，而被代理了的对象的会按照我们自定义的分支运行。
`Proxy`使得我们对目标对象进行监视和拦截，对外部对对象的操作进行校验。除了上述的`get()`与`set()`之外，官方还提供了另外11个`API`，供开发者使用，这些方法全部绑定在了`Proxy`的第二个参数，也就是`handler`上面：
```javascript
handler.get()
// 在读取代理对象的某个属性时触发该操作，比如在执行 proxy.foo 时。

handler.set()
// 在给代理对象的某个属性赋值时触发该操作，比如在执行 proxy.foo = 1 时。

handler.getPrototypeOf()
// 在读取代理对象的原型时触发该操作，比如在执行 Object.getPrototypeOf(proxy) 时。

handler.setPrototypeOf()
// 在设置代理对象的原型时触发该操作，比如在执行 Object.setPrototypeOf(proxy, null) 时。

handler.isExtensible()
// 在判断一个代理对象是否是可扩展时触发该操作，比如在执行 Object.isExtensible(proxy) 时。

handler.preventExtensions()
// 在让一个代理对象不可扩展时触发该操作，比如在执行 Object.preventExtensions(proxy) 时。

handler.getOwnPropertyDescriptor()
// 在获取代理对象某个属性的属性描述时触发该操作，比如在执行 Object.getOwnPropertyDescriptor(proxy, "foo") 时。

handler.defineProperty()
// 在定义代理对象某个属性时的属性描述时触发该操作，比如在执行 Object.defineProperty(proxy, "foo", {}) 时。

handler.has()
// 在判断代理对象是否拥有某个属性时触发该操作，比如在执行 "foo" in proxy 时。

handler.deleteProperty()
// 在删除代理对象的某个属性时触发该操作，比如在执行 delete proxy.foo 时。

handler.ownKeys()
// 在获取代理对象的所有属性键时触发该操作，比如在执行 Object.getOwnPropertyNames(proxy) 时。

handler.apply()
// 在调用一个目标对象为函数的代理对象时触发该操作，比如在执行 proxy() 时。

handler.construct()
// 在给一个目标对象为构造函数的代理对象构造实例时触发该操作，比如在执行new proxy() 时。
```