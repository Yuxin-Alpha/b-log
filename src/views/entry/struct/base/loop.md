## 递归

为了引出递归的概念，我们先来解决一道题：找出一个数组的最大值。
当然，我们可以使用遍历的方式，但是我们这一节要换一种方式解决这个问题。
首先，递归的内部包含着一种分治的思想，也就是，将大问题转化成小问题，将小问题用更小的方法转化成更小的问题。那么这样的问题应该怎么划分呢？首先取一个数组的最大值，我们可以分成将数组从中间分成两块，左边一块求最大值，右边一块求最大值，二者比较，比较大的就是整个数组的最大值；然后继续将左数组切成两块，找出左一的最大值以及左二的最大值，两者比较。观察代码：

```javascript
// 这个函数就是要找出一个数组中的最大值
function getMax(arr, left, right) {
  // 获取中间位置
  let mid = Math.floor((left + right)/2)
  // 找出左数组中的最大值
  let maxLeft = getMax(arr, left, mid)
  // 找出右数组中的最大值
  let maxRight = getMax(arr, mid+1, right)
  // 返回较大值
  return maxLeft >= maxRight ? maxLeft : maxRight
}
```

我们先将代码写成这样，这是我们需要实现的第一步，我们知道，递归需要终止条件，否则函数就会无限制地入栈，最后爆栈结束，那么这个递归什么时候应该结束呢？当然是数组不能再切割的时候（数组中只剩一个元素的时候）

```javascript
function getMax(arr, left, right) {
  // 数组只剩下一个元素的时候，数组的左下标和右下标是相等的
  if(left === right) {
    return arr[left]
  }
  // ...上述代码
}
```

整合一下代码：
```javascript
function getMax(arr, left, right) {
  if(left === right) {
    return arr[left]
  }
  let mid = Math.floor((left + right)/2)
  let maxLeft = getMax(arr, left, mid)
  let maxRight = getMax(arr, mid+1, right)
  return maxLeft >= maxRight ? maxLeft : maxRight
}
const arr = [2, 7, 8, 10, 9, 5, 4]
console.log(getMax(arr, 0, arr.length-1)); // 10
```

我们再对代码做进一步的分析：

```javascript
/**
 * 首先，我们调用getMax方法传入arr 0 和 7，getMax(arr, 0, 7)进入执行栈
 * 进入函数中，mid当前是3，maxLeft的值是getMax(arr, 0, 3)的返回值，这一轮maxRight的值是getMax(arr, 4, 7)
 * getMax(arr, 0, 3)进入执行栈
 * 在这一轮中，mid是1，maxLeft的值是getMax(arr, 0, 1)的返回值，这一轮maxRight的值是getMax(arr, 2, 3)
 * getMax(arr, 0, 1)进入执行栈
 * 在这一轮中，mid变成了0，maxLeft的值是getMax(arr, 0, 0)，这一轮maxRight的值是getMax(arr, 1, 1)
 * getMax(arr, 0, 0)进入执行栈
 * 此时由于left与right的值相等了，所以arr[0]被返回了出去，也就是上一轮中的maxLeft的值变成了arr[0]，与此同时，arr[1]也被返回了出去赋值给了上一轮的maxRight
 * maxLeft与maxRight比较 ，发现maxRight较大，返回出去，此时getMax(arr, 0, 1)执行完毕，出栈
 * 在getMax(arr, 0, 3)这个函数的作用域中，maxLeft的值已经获得，就是getMax(arr, 0, 1)的值，所以当前要继续执行getMax(arr, 2, 3)，来获取maxRight的值，执行的顺序与上面类似
 * 当getMax(arr, 2, 3)也获得了返回值，我们就可以获得getMax(arr, 0, 3)的返回值，同样的，在getMax(arr, 0, 7)中，maxLeft的值已经获得，就是getMax(arr, 0, 3)的值，转而执行getMax(arr, 4, 7)的值
 * 当这两个函数最终都执行完毕，就可以比较，这样执行栈中最后一个getMax也就执行完毕出栈释放了。
 * /
```

我们要明确，我们之所以可以用分治的思想来处理这样的问题，其实是利用了计算机语言的编译器或者解释器会保存我们每个函数<strong>独有</strong>的工作区间（有的地方也叫作用域），当一个函数没有执行完，编译器不会把这个函数释放，所以递归的过程就是不停地将新函数压栈，然后不停地生成函数独有作用域，我们借助系统的特性来分治大问题，因此，我们要明白，所有的递归都可以转化成非递归的方式。

### 复杂度

递归行为复杂度的通式（要求：划分问题之后的子问题的规模要是一样的）：
<strong> T(N) = a*T(n/b) + O(n^d) </strong>

其中，N表示父问题的样本量，a表示递归的个数，n/b表示被拆成子问题后，每个子问题的样本量，后面的O(n^d)表示递归完成之后的后续操作的时间复杂度。

我们再来分析一下上一个递归实现的复杂度：我们每次都会将数组分成两份，而数字大小的比对又是常数操作，套用上面的公式。上述递归算法的时间通式为：

<strong>T(N) = 2*T(N/2) + O(1)</strong>

由此我们可以推出：<strong>a=2 , b=2 , d=0</strong>

递归复杂度的计算估计公式：

+ <strong>log(b, a) > d</strong> -> 复杂度为<strong>O(N^log(b, a))</strong>

+ <strong>log(b, a) = d</strong> -> 复杂度为<strong>O(N^d * logN)</strong>

+ <strong>log(b, a) < d</strong> -> 复杂度为<strong>O(N^d)</strong>
