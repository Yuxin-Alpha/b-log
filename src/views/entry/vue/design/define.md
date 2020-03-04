## 数据劫持

Vue的是靠数据劫持来对<strong>data</strong>里面的每个属性进行取值和赋值的重新定义，重新定义的方法就是靠<strong>Object.defineProperty</strong>方法。我们先来简单实现一下这个功能。

```javascript
const obj = {
  name: 'Jack',
  position: {
    address: 'some area',
    date: '2012.08.30'
  }
}

function update() {
  console.log('视图更新') 
}

function observe(target) {
  // 对于数组的处理会放到下一章节讨论
  if(Array.from(target)) return
  // 不是对象 直接返回
  if(typeof target !== 'object' || target === null) {
    return
  }
  for(let key in target) {
    // 为了在defineProperty 函数中不声明变量而获得并保存对象原来的初始值
    // 这里需要多传递一层函数
    reactiveUpdate(target, key, target[key])
  }
}

function reactiveUpdate(target, key, value) {
  // 递归，深度监听对象的属性
  observe(target[key])
  Object.defineProperty(target, key, {
    get() {
      return value
    },
    set(newValue) {
      observe(newValue)
      // 赋值与原来的值相同，不执行数据更新操作
      if(value === newValue) {
        return
      }
      // 新值触发视图更新函数
      update()
      value = newValue
    }
  })
}
observe(obj)
obj.position.date = '2019.09.10'
console.log(obj.position.date);
// 视图更新
// 2019.09.10
```

这个视图更新的函数写的比较随便，当然这也不是这一张的重点，我们主要是要了解，当我们修改监听对象的某一属性的时候，视图会发生改变。视图更新的函数，笔者会在后面的文档详细撰写。