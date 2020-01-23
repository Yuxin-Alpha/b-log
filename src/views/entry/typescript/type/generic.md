## 泛型

在类型声明时给定占位符，使用的时候再明确类型。

```typescript
function createArray<T>(length:number, val:T):Array<T> {
  const arr:Array<T> = []
  for(let i=0;i<length;i++) {
    arr.push(i)
  }
  return arr
}
createArray<string>()

// 泛型类
class MyArray<T> {
  list:Array<T>=[]
  add(val:T):void {
    this.list.push(val)
  }
  getMax():T {
    return this.list[0]
  }
}

let myArray = new MyArray<number>()

// 泛型接口，定义接口的时候使用泛型，用来约束函数
interface Sum<T> {
  (a:T ,b:T):T
}

let sum:Sum<number> = function(a:number, b:number) {
  return a + b
}

// 泛型类型的别名
type Cart<T> = {list: Array<T>} | Array[T]
```