## Generator(生成器函数)

generator 是 es6 中新出的语法，又名生成器函数，生成的东西叫做迭代器，迭代器本身是一个对象，但是功能比较特殊，我们先来看看生成器函数的语法：

```javascript
// 生成器函数在声明的时候用*标识
function* read() {
	yield 1;
	yield 2;
	yield 3;
}

const iter = read();
console.log(iter.next()); // { value: 1, done: false }
console.log(iter.next()); // { value: 2, done: false }
console.log(iter.next()); // { value: 3, done: false }
console.log(iter.next()); // { value: undefined, done: true }
```

我们可以发现这个生成器函数不是一次性执行完的，而是需要调用一定次数的`next()`, 这个次数与生成器函数里面`yield` 出现的次数有关，换句话说，`next()`方法调用一次，函数会执行到一个`yield`，`next()`的返回值是一个包含`value`与`done`属性的对象，每次`yield`后面的值会作为`value`的值跟随`next()`的执行返回。
除此之外，需要注意的是，`next()`也是可以传递参数的，这个参数会传给上一次`yield`的返回值。

```javascript
function* eat() {
	let nameOne = yield 1;
	console.log(`1.${nameOne}`)
	let nameTwo = yield 2
	console.log(`2.${nameTwo}`)
	let nameThree = yield 3
	console.log(`3.${nameThree}`)
}
let iter = eat()
iter.next('香蕉')
iter.next('苹果')
iter.next('橘子')
iter.next('梨子')
```
这样我们会获得两个打印：
> 1.苹果
> 2.橘子
> 3.梨子

可以发现，向第一个`next()`传递参数，生成器函数内部是接受不到的，之后的`next()`里面的每个参数会作为上一次yield运算的返回值，当我们用变量接受的时候就可以在生成器函数中依据外部传递的参数按需书写我们的业务逻辑。