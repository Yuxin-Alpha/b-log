## 生成器函数

我们在转化一个类数组的时候，可能会这么做

```javascript
function print(a, b, c, d) {
  console.log([...arguments])
  console.log(Array.from(arguments))
}
```

这两个API返回的结果是一模一样的，但是原理却不尽相同。
`Array.from`是对参数里面的每项进行遍历，然后向一个中间数组一直push，最后把这个数组返回，而`...`运算符其实调用的是参数内部的生成器函数，以此来生成一个可以迭代的对象。

```javascript
{
  0:1,
  1:2,
  2:4,
  length: 3,
  [Symbol.iterator]() {
    let index = 0
    return {
      next:()=> {
        return { value: this[index++], done: index === this.length  }
      }
    }
  }
}

```
