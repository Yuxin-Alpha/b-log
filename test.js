function mergeSort(arr) {
	sortProcess(arr, 0, arr.length-1)
}
// 递归排列
function sortProcess(arr, left, right) {
	if(left === right) return
	let mid = left + ((right-left) >> 1)
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
const arr = [9,4,3,5,8,7,1,6]
mergeSort(arr)
console.log(arr);