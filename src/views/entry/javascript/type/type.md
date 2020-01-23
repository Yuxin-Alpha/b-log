## Type of Javascript

我们在学习一门计算机语言的过程中，总是先从变量的类型开始，不过在笔者的认知中，<strong>JavaScript</strong>的变量是没有类型的，只有值才有，因为在Js的世界里并不强制一个变量被赋值的类型一直是同一个类型。
在Javascript中，类型总共有以下这些:

```javascript
123 // number
'123' // string
true // boolean
function add() {} //function
undefined // undefined
null // object
Symbol() // Symbol
{} // object
```
上述后面的注释，是<strong>typeof</strong>关键字的返回值

这些类型可以分为两类--值类型(包括)与引用类型。这两者区分的条件，是Javascript在执行的时候，不同的类型的变量拥有不同的存储区域，值类型是占用内存比较小的，所以会存储在栈上，而引用类型则在堆上

