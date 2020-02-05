## 线性表

为了解决本章后面的练习题，本章笔者先实现几个比较基础的线性数据结构。在完成之后章节的练习题时，笔者将酌情直接使用本章定义过的类或方法，届时笔者将不再赘述。

### 栈

线性结构，先进后出

```javascript
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

```

### 队列

线性结构，先进先出

```javascript
class Queue {
  constructor() {
    this.items = []
  }
  // 队列是否为空
  isEmpty() {
    return this.items.length === 0
  }
  // 入队操作
  enQueue(item) {
    this.items.push(item)
  }
  // 出队操作
  outQueue() {
    if(this.isEmpty()) {
      throw new Error('当前队列中无元素')
    }
    return this.items.shift()
  }
}
```

### 链表

线性结构，从头遍历搜索

```javascript
class Node{
  constructor(data, next=null) {
    this.data = data
    this.next = next
  }
}

class LinkedList{
  constructor() {
    this.head = null
    this.current = this.head
  }
  // 成链操作
  enLinked(node) {
    if(!this.head) {
      this.head = node
    } else {
      this.current.next = node
    }
    this.current = node
  }
}
```