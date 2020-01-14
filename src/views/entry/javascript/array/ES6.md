## Array Of ES6+

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

 