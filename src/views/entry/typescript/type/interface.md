## 接口

用来描述对象的属性和值。注意接口会创建新的名字，并且可以被继承和实现，使用type关键字产生的别名不可以。

```typescript
interface Speakable {
  name:string
  speak():void
}

let p1:Speakable = {
  name: '张三',
  [propName:string]: number;
  speak() {  }
}

// 描述对象行为
// 一个类可以实现多个接口，一个接口也可以被多个类实现
interface Eatable {
  eat():void
}
// 接口继承
interface EatDrink extends Eatable {

}

interface Discount {
  (price: number):number
}

function discount(price:number):number {
  return price * 5
}

let d:Discount = discount

class Person1 implements Speakable, Eatable {
  name:string;
  speak(){}
  eat(){}
}

class Person2 implements Eatable {
  eat(){}
}
```
