const obj = {
	name: 'Jack',
	position: {
		address: 'some area',
		date: '2012.08.30'
	}
}

function update() {
	console.log('视图更新') 
}

function observe(target) {
	if(typeof target !== 'object' || target === null) {
		return
	}
	for(let key in target) {
		reactTiveUpdate(target, key, target[key])
	}
}

function reactTiveUpdate(target, key, value) {
	observe(target[key])
	Object.defineProperty(target, key, {
		get() {
			return value
		},
		set(newValue) {
			if(value === newValue) {
				return
			}
			update()
			value = newValue
		}
	})
}
observe(obj)
obj.position.date = '2019.09.10'
console.log(obj.position.date);
