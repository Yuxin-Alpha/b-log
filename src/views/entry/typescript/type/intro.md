## 基础类型

作为`JavaScript`的超集，一切合法的`Javascript`程序在`TypeScript`中都是能够运行的，`Typescript`在`Javascript`执行之前做了一次类型检查，避免由类型错误而产生的bug，我们先来过一遍官方文档：

```typescript
// 基本类型
let typeOne:number = 100
let typeTwo:string = 'Jack'
let typeThree:boolean = true
let typeFour:undefined = undefined
let typeFive:null = null
typeTwo = 100 // 编译报错

// 类型推论: 如果赋初始值的时候没有显式指出类型，编译器会自动对变量进行类型推断
// 如果再次赋值的时候类型与推断的类型不一致，编译器会报错
let nameOne = 'Jack'
nameOne = 10 // 编译报错

// 联合类型: 表示一个变量可以有多种类型
let nameTwo:string|number|boolean;
nameTwo = 'Clement'
nameTwo = 1000
nameTwo = true

// 数组声明
let arrOne:[]number = [1, 2, 3]
let arrTwo:Array<number> = [4, 5, 6]

const arrThree:Array<>

// 枚举类型
enum Gender{
  BOY, GIRL
}
let boy:Gender = Gender.BOY
console.log(boy) // 0
console.log(Gender.GIRL) // 1

// 类型断言: 对于不确定的类型，可以使用as关键字将其断言成一个类型来调用这个类型独有的属性或者方法
// 注意：属性和方法只有对象有，我们之所以能够用下面的写法来使用值类型的属性和方法，其实是编译器帮我们提前做了一次封装
let name6:string|number|boolean;
(name6 as string).length; // 断言成string类型
(name6 as number).toFixed(); // 断言成number类型

// 字面量联合：表示这个变量被赋值为两个值中的某一个
let name7:'A'|'B' = 'A';
name7 = 'c' // 编译报错
```