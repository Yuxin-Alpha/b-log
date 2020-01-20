## 归并排序

利用递归的思想，数组中间砍一刀，左边排好序，右边排好序，最后利用类似外排的方式排序，举个例子：

```javascript
/**
 * 一个数组[2,8,4,9,3,1],分为两部分2 8 4|9 3 1
 * 左边排好序，右边再排好序，变成2 4 8|1 3 9
 * 准备一个辅助数组[]，并且声明两个变量a, b 分别指向左边和右边的初始位置
 * 开始对比left[a] 与right[b]谁更小，如果left[a]更小，left[a]进辅助数组，接着a向后挪一位
 * 当a,b中有一个到头了，将另一个数组剩下的部分放入辅助数组
 * 最后将辅助数组替换原数组
*/
```

上代码：

```javascript
function mergeSort(arr) {
  sortProcess(arr, 0, arr.length-1)
}
// 递归排列
function sortProcess(arr, left, right) {
  if(left === right) return
  let mid = left + ((right-left) >> 1)
  // 将左边排序
  sortProcess(arr, left, mid)
  // 将右边排序
  sortProcess(arr, mid+1, right)
  // 外排merge
  merge(arr, left, mid, right)
}

function merge(arr, left, mid, right) {
  // 辅助数组
  let helpArr = []
  // 辅助数组下标
  let currentIndex = 0
  // 左边数组最左下标
  let leftPointer = left
  // 右边数组最左下标
  let rightPointer = mid + 1
  // 外排，两个数组都没到头，向辅助数组放左右两边数组中更小的当前值
  while(leftPointer <= mid && rightPointer <= right) {
    helpArr[currentIndex++] = arr[leftPointer] < arr[rightPointer] ? arr[leftPointer++] : arr[rightPointer++]
  }
  // 如果右侧到头了，将左侧剩下的值放入辅助数组
  while(leftPointer <= mid) {
    helpArr[currentIndex++] = arr[leftPointer++]
  }
  // 如果左侧侧到头了，将右侧剩下的值放入辅助数组
  while(rightPointer <= right) {
    helpArr[currentIndex++] = arr[rightPointer++]
  }
  // 将辅助数组中的值拷回原数组
  for(let i = 0;i< helpArr.length;i++) {
    arr[left + i] = helpArr[i]
  }
}
```

### 延伸

+ 小和问题

```javascript
/**
 * 一个数组中，每一个数左边比当前数小的数累加起来，叫做这个数组的小和。求一个数组的小和
 * 例子：[1, 3, 4, 2, 5]
 * 1左边比1小的数：没有；
 * 3左边比3小的数：1；
 * 4左边比4小的数：1，3；
 * 2左边比2小的数：1；
 * 5左边比5小的数：1，3，4，2；
 * 所以小和为 1+1+3+1+1+3+4+2=16
*/
```

这道题当然可以使用两次遍历来做，但是那样时间复杂度是<strong>O(n^2)</strong>，利用归并排序，我们可以将时间复杂度降低到<strong>O(n*log(2,n))</strong>。我们反向思考一下这个问题，其实这道题可以转化成，右边有多少个值比当前的值大，基于这个思路，我们可以写出这样的代码。

```javascript
function smallSum(arr) {
  sortProcess(arr, 0, arr.length-1)
}
// 递归排列
function sortProcess(arr, left, right) {
  if(left === right) return
  let mid = left + ((right-left) >> 1)
  // 左边合并的时候产生的小和 加上 右边合并产生的小和 再加上 merge过程中产生的小和
  return sortProcess(arr, left, mid) + sortProcess(arr, mid+1, right) + merge(arr, left, mid, right)
}
// 外排merge
function merge(arr, left, mid, right) {
  let helpArr = []
  let currentIndex = 0
  let leftPointer = left
  let rightPointer = mid + 1
  let res = 0
  while(leftPointer <= mid && rightPointer <= right) {
    res += arr[leftPointer] < arr[rightPointer] ? (right - rightPointer + 1) * arr[leftPointer] : 0
    helpArr[currentIndex++] = arr[leftPointer] < arr[rightPointer] ? arr[leftPointer++] : arr[rightPointer++]
  }
  while(leftPointer <= mid) {
    helpArr[currentIndex++] = arr[leftPointer++]
  }
  while(rightPointer <= right) {
    helpArr[currentIndex++] = arr[rightPointer++]
  }
  for(let i = 0;i< helpArr.length;i++) {
    arr[left + i] = helpArr[i]
  }
  return res
}
```