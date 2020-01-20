## 冒泡排序

从头开始，每次对比两个数，如果前一个数比后一个数大，则两个数交换，一轮过去之后，最大的数会被放到数组的末尾，接下来，在剩下的数组中继续这样，将最大的数排在倒数第二个，以此类推。

```javascript
function bubbleSort(arr) {
  for(let i = arr.length - 1; i > 0; i--) {
    for(let j = 0; j < i; j++) {
      if(arr[j] > arr[j+1]) {
        arr[j] = arr[j] ^ arr[j+1]
        arr[j+1] = arr[j] ^ arr[j+1]
        arr[j] = arr[j] ^ arr[j+1]
      }
    }
  }
}
```

### 分析
