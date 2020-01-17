## Reflect
`Reflect`是`Javascript`在`es6`之后的内置对象，功能与`Proxy`相似，不同的是，`Reflect`不能使用`new`进行实例化，`es6`中将`Object`上面的某些方法放到了`Reflect`对象上。`Reflect`对一些方法或者命令式的操作进行了集成，这样，`Javascript`代码看起来会干净许多，否则有的是`Object`上面的静态方法，有的是原型上面的方法，看起来非常地混乱。

```javascript
Reflect.get()
// 获取对象身上某个属性的值，类似于 target[name]。

Reflect.set()
// 将值分配给属性的函数。返回一个Boolean，如果更新成功，则返回true。

Reflect.has() 
// 判断一个对象是否存在某个属性，和 in 运算符 的功能完全相同。

Reflect.apply()
// 对一个函数进行调用操作，同时可以传入一个数组作为调用参数。和 Function.prototype.apply() 功能类似。

Reflect.construct()
// 对构造函数进行 new 操作，相当于执行 new target(...args)。

Reflect.defineProperty()
// 和 Object.defineProperty() 类似。

Reflect.deleteProperty()
// 作为函数的delete操作符，相当于执行 delete target[name]。

Reflect.getPrototypeOf()
// 类似于 Object.getPrototypeOf()。

Reflect.setPrototypeOf()
// 类似于 Object.setPrototypeOf()。

Reflect.ownKeys()
// 返回一个包含所有自身属性（不包含继承属性）的数组。(类似于 Object.keys(), 但不会受enumerable影响).
```