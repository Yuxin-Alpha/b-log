function update() {
	console.log('模拟视图的更新');
}

const obj = {
	name: 'Jack',
	age: 9
}
 
const handler = {
	get(target, key) {
		if(typeof target[key] === 'object' && target[key] !== null) {
			return new Proxy(target[key], handler)
		}
		return Reflect.get(target, key)
	},
	set(target, key, value) {
		update()
		return Reflect.set(target, key, value)
	}
}

const proxy = new Proxy(obj, handler)

proxy.name = "Jason"