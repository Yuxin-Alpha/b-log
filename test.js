class Stack {
  constructor() {
    this.items = []
  }
  // 检验栈是否空
  isEmpty() {
    return this.items.length === 0
  }
  // 入栈操作
  enStack(item) {
    this.items.push(item)
  }
  // 出栈操作
  outStack() {
		if(this.isEmpty()) {
			throw new Error('当前栈中无元素')
		}
    return this.items.pop()
  }
  // 返回栈顶元素
  getTop() {
		if(this.isEmpty()) {
			throw new Error('当前栈中无元素')
		}
    return this.items[this.items.length - 1]
  }
}

const p = new Stack()
p.outStack()