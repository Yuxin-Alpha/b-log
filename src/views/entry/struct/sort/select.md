## 选择排序

在数组的第一个元素开始遍历，一趟遍历之后，找到最小的数，然后和第一个数交换，
然后再从第二个元素开始遍历，再找到最小的数，和第二个数交换，以此类推

```javascript
function selectSort(arr) {
  for(let i=0;i<arr.length-1;i++) {
    let minIndex = i
    for(let j=i+1;j<arr.length;j++) {
      minIndex = arr[j] < arr[minIndex] ? j : minIndex
    }
    let tmp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = tmp
  }
}
```