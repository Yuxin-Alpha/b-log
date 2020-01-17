## Array Of ES5

本章我们主要介绍几个es6新出的高阶函数以及其内部具体实现。

+ map
```javascript
Array.prototype.myMap = function(fn) {
  // 绑定this
	const self = this
	// 数组类型检查
	checkArrayType(self)
	// 空数组判断
  if(!self.length) {
    return []
  }
  const newArr = []
  for(let i=0; i < self.length; i++) {
    newArr.push(fn())
  }
  return newArr
}
```

+ reduce
reduce应该算是数组中最复杂的API，我们先来看看使用方法。
```javascript

```

源码实现：

```javascript
Array.prototype.myReduce = function(callback(previousValue, currentValue, currentIndex, array), initValue) {
  // 绑定this
	const self = this
	// 数组类型检查
	callback(previousValue, currentValue, currentIndex, array)
	checkArrayType(self)
	// 空数组判断
  if(!self.length) {
    return []
  }
  const newArr = []
  for(let i=0; i < self.length; i++) {
    newArr.push(fn())
  }
  return newArr
}
```
