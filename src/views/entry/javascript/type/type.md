## Type of Javascript

探究一个语言总是从变量的类型开始的，<strong>Javascript</strong>作为一个弱类型的语言，在使用变量的时候总会出现令人意想不到的问题。
在Javascript中，类型总共有以下这些:

```javascript
123 // number
'123' // string
true // boolean
function add() {} //function
undefined // undefined
null // object
Symbol // Symbol
[] // object
{} // object
```
上述后面的注释，是<strong>typeof</strong>关键字的返回值

这些类型可以分为两类--值类型(包括)与引用类型。这两者区分的条件，是Javascript在执行的时候，不同的类型的变量拥有不同的存储区域，值类型是占用内存比较小的，所以会存储在栈上，而引用类型则在堆上

