let arrProto = Array.prototype
const proto = Object.create(arrProto)
const methodsList = ['push', 'pop', 'shift', 'unshift', 'splice', 'reverse', 'sort']
function update() {
	console.log('视图更新');
}
methodsList.forEach(item => {
	proto[item] = function() {
		update();
		arrProto[item].call(this, ...arguments)
	}
})
let list  = [1, 2, 3]
list.__proto__ = proto
list.push(5)
