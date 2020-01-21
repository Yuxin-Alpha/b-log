function partition(arr, value) {
	// 当前索引
	let current = 0
	// 左区域下标 初始在 -1
	let less = current - 1
	// 右区域下标 初始在 数组的长度位置
	let more = arr.length + 1
	// 当当前下标跟右区域撞上的时候，完成
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
}

function swap(arr, i, j) {
	let tmp = arr[i]
	arr[i] = arr[j]
	arr[j] = tmp
}
const arr = [9,4,3,5,8,7,1,6]
partition(arr, 0, 7, 5)
console.log(arr);