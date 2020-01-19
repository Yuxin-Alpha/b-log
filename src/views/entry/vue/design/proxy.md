## Proxy实现

Proxy直接就支持数组，不用区分是对象还是数组

```javascript
function update() {
  console.log('模拟视图的更新');
}

const obj = {
  name: 'Jack',
  age: 9
}
 
const handler = {
  get(target, key) {
    // 如果取的值是对象，继续用handler对这个对象的属性进行数据劫持
    if(typeof target[key] === 'object' && target[key] !== null) {
      return new Proxy(target[key], handler)
    }
    // 使用Reflect获取数据
    return Reflect.get(target, key)
  },
  set(target, key, value) {
    // 如果变化的数组的length属性，不更新视图
    if(key === 'length') return true
    update()
    return Reflect.set(target, key, value)
  }
}

const proxy = new Proxy(obj, handler)

proxy.name = "Jason"
```