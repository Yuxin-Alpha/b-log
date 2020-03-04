## 事件模块

```javascript
function EventEmitter() {
	this._events = {}
}

EventEmitter.prototype.on = function(eventName, callback) {
	let stack = this._events[eventName] || []
	stack.push(callback)
	this.events[eventName] = stack
}

EventEmitter.prototype.emit = function(eventName, ...args) {
	if(this._events[eventName]) {
		this._events[eventName].forEach(fn => {
			fn(...args)
		})
	}
}
```