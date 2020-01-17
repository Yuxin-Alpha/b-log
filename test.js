/* eslint-disable no-extend-native */
const methodArr = ['push', 'pop', 'shift', 'join']
function printItem(value) {
	console.log(`我当前操作的是${value}`)
}
methodArr.forEach(method => {
	let oldMethod = Array.prototype[method]
	Array.prototype[method] = function(args) {
		oldMethod.call(this, args);
		console.log(args, 'dddddddddddd');
		// printItem(args)
	}
})

const arr = [1,2,3,4]
arr.push(5)
console.log(arr);