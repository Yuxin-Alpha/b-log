## 快速排序

我们先放下快速排序，做一道题：

```javascript
/** 荷兰国旗问题：
  * 给定一个数组arr，和一个数num，把小于num的值放在左边，等于num的值放中间，大于num的值放在右边
*/

function partition(arr, current, right, value) {
  // 左区域下标 初始在 -1
  let less = current - 1
  // 右区域下标 初始在 数组的长度位置
  let more = right + 1
  // 当前下标跟右区域撞上的时候，完成
  while(current < more) {
    // 如果当前索引的值小于目标值，跟左区域的下一个值交换，左区域扩大1位
    // 如果当前索引的值大于目标值，跟右区域的上一个值交换，右区域扩大1位，接着继续比对交换过来的值
    // 如果当前索引的值等于目标值，当前下标往下走，不做任何操作
    if(arr[current] < value) {
      swap(arr, ++less, current++)
    } else if (arr[current] > value) {
      swap(arr, --more, current)
    } else {
      current ++
    }
  }
  return [less+1, more]
}
// 交换两个值
function swap(arr, i, j) {
  let tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}
```

如果看得不是太懂，我们来稍微走一下流程：

```javascript
/**
 * 假设一个数组[9,4,3,1,8,7,5,6]，我们的目标值是5
 * 进入函数后，当前，左区域下标-1 ，右区域下标8，current是下标0的位置
 * 第一个数字是9，大于5，那么9和右区域的上一个值，也就是6换，变成[6,4,3,1,8,7,5,9]，右区域扩大一位，下标来到7
 * 此时current还是0，而arr[0]是6，6又是大于5的，那么6和右区域的上一个值，也就是5换，变成[5,4,3,1,8,7,6,9]
 * 此时current 还是0，而arr[0]是5，等于5，因此不做任何操作，current向后移动来到1的位置
 * 此时arr[1]是4，小于5，所以4和左区域下一个值，也就是0下标上的数交换，左区域扩大一位，来到下标0，与此同时，当前下标向后移动一位
 * 如此反复
*/
```

明白了上面这个问题，我们很快就能写出快速排序

```javascript
function quickSort(arr, left, right) {
  if(left < right) {
    // 产生随机数交换数组最后一个值，进行随机快排
    let rand = Math.floor(Math.random() * (right-left+1))
    swap(arr, rand, right)
    let p = partition(arr, left, right)
    quickSort(arr, left, p[0] - 1)
    quickSort(arr, p[1]+1, right)
  }
}

function partition(arr, left, right) {
  let less = left - 1
  let more = right
  while(left < more) {
    if(arr[left] < value) {
      swap(arr, ++less, left++)
    } else if (arr[left] > value) {
      swap(arr, --more, left)
    } else {
      left ++
    }
  }
  swap(arr, --more, right)
  return [less+1, more]
}
```