## 数组

数组是一种数据集合的表现形式，在`JS`中，数组是对象的一种特殊表现形式，数组每个下标索引其实就是一个对象的某个属性，而索引对应的数据，就是，这个属性的值。

本章主要探究一些`Array`上面原生的`API`的实现方法，为了类型尽量让内部实现与源码吻合，笔者这里先自己写几个工具函数：

```javascript
/**
 *  isType
 *	判断一个变量的类型
*/
function isType(type) {
  return function(params) {
    return Object.toString.call(params).slice(8, -1) === type
  }
}
/**
 *  checkType
 *	类型检查
*/
function checkArrayType(params) {
  if(!isType('Array')(params)) {
    throw new TypeError('传入参数不是Array类型')
  }
}
```
