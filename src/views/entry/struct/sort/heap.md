## 堆排序

```javascript
function heapSort(arr) {
  // 建立大根堆
  for(let i=0; i<arr.length; i++) {
    heapInsert(arr,i)
  }
  let heapSize = arr.length
  swap(arr, 0, --heapSize)
  while(heapSize > 0) {
    // 调整
    heapify(arr, 0, heapSize)
    swap(arr, 0, --heapSize)
  }
}

function heapify(arr, index, heapSize) {
  let left = index * 2 + 1
  while(left < heapSize) {
    let largest = left + 1 < heapSize && arr[left + 1] > arr[left] ? left + 1 : left
    largest = arr[largest] > arr[index] ? largest : index
    if(largest === index) break
    swap(arr, largest, index)
    index = largest
    left = index * 2 + 1
  }
}
function heapInsert(arr, index) {
  while(arr[index] > arr[Math.floor((index - 1) / 2)]) {
    swap(arr, index, Math.floor((index-1)/2))
    index = Math.floor((index-1)/2)
  }
}
```