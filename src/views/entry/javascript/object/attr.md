## 对象特性
对象属性大家应该很常见，但是说到对象特性，也许就有些人比较陌生了。Javascript对象的每个属性都有一个特性对象，对这个属性进行修饰。

| 特性             | 作用                               |
| ---------------- | ---------------------------------- |
| \[\[Configurable]] | 能否通过delete删除属性进而重新定义 |
| \[\[Enumerable]]   | 能否通过for...in循环返回属性       |
| \[\[Writable]]     | 能否修改属性的值                   |
| \[\[Value]]        | 该属性的数据值                     |

先从`[[Value]]`说起，我们平时修改任何一个对象某属性的数据值修改都是反映在该属性的`[[Value]]`属性上，例如一个对象`{num: 5}`, 其实指的就是`num`属性的`value`特性值是5，我们可以通过`Object.defineProperty`函数来对某个对象的某个属性的特性进行设置。举个例子：

```javascript
var person = {};
// person.name的值就被设置成了'zhangsan'
Object.defineProperty(person, 'name', {
    writable: false,
    value: 'zhangsan'
});
// person.name 此时依旧是'zhangsan'
person.name = 'lisi';
```

上述代码，我们对person对象下的name属性的特性进行了配置，由于`writable`属性被设置成为`false`，所以我们无法显式对其`value`特性进行修改。相似的，如果我们配置了`configurable`属性，则该属性无法通过`delete`命令删除。
我们在书写JavaScript代码时，所定义的对象上的每个属性，除`value`特性以外，其他的特性默认值都是`true`，因此，如果不是特殊情况，不要通过上述函数修改某个属性的特性。

我们来看一下对象的结构：

```javascript
var obj = { foo:  5 };
```

上面的代码将一个对象赋值给变量`obj`，`JavaScript `引擎会先在内存里面，生成一个对象`{ foo: 5 }`，然后把这个对象的内存地址赋值给变量`obj`而变量`obj`是一个地址（`reference`）。

原始的对象以字典结构保存，每一个属性名都对应一个属性描述对象：

```javascript
{
  foo: {
    [[value]]: 5
    [[writable]]: true
    [[enumerable]]: true
    [[configurable]]: true
  }
}
```

所以，我们通过生成对象操作，给foo的value赋值为5。我们知道，foo同样可以被赋值成一个函数，例如：

```javascript
var obj = { foo: function() {} };
```

这时，引擎会将函数<b>单独保存在内存</b>中，然后再将函数的地址赋值给foo属性的value属性。即：

```javascript
{
  foo: {
    [[value]]: //函数的地址
    ...
  }
}
```

对象属性的访问器属性：我们在使用或者修改每个对象的属性时，其实都是通过其内置的getter方法与setter方法实现的，`[[Get]]`用于读取，`[[Set]]`用于设置。