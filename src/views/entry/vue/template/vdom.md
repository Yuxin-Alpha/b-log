## 虚拟DOM

我们在编写了数据模板的代码之后，对Vue的渲染原理应该有了大概的认识，但是我们在将数据和模板结合再挂载到页面的过程中其实操作了大量的DOM，这是很消耗性能的，这样我们可以联想到，将我们每一个节点转换成一个Javascript的对象，那么我们在更新对比的时候就通过比对这个对象的变化，最后将对比过后的虚拟DOM生成出真实的DOM再挂载到页面上，这样就节约了很多的性能。

首先，我们规定一个范式：

```javascript
/**
 * <div></div> => { tag: 'div' }
 * 我是一段文本 => { tag: undefined, value: '我是一段文本' }
 * <div title="1"></div> => { tag: 'div', data: { title: 1 }}
 * <div><p><p></div> => { tag: 'div', children: [{ tag: 'p' }] }
*/
```

规定了这样的转化规则，就来实现这个虚拟DOM的实现吧：

```javascript
// 虚拟DOM构造函数
class VNode {
  constructor(tag, data, value, type) {
    this.tag = tag.toLowerCase()
    this.data = data
    this.value = value
    this.type = type
    this.children = []
  }
  appendChild(vNode) {
    this.children.push(vNode)
  }
}

// 产生虚拟DOM
function getVNode(node) {
  let nodeType = node.nodeType
  let _vnode = null
  if(nodeType === 1) {
    let nodeName = node.nodeName
    let attrs = node.attributes
    let _attrs = {}
    for(let i=0; i<attrs.length; i++) {
      _attrs[attrs[i].nodeName] = attrs[i].nodeValue
    }
    _vnode = new VNode(nodeName, _attrs, undefined, nodeType)
    let childNodes = node.childNodes
    for(let i=0; i<childNodes.length; i++) {
      _vnode.appendChild(getVNode(childNodes[i]))
    }
  } else if(nodeType === 3) {
    _vnode = new VNode(undefined, undefined, node.nodeValue, nodeType)
  }
  return _vnode
}

// 将虚拟DOM转化为真实的DOM

function parseVNode(vnode) {
  let type = vnode.type
  let _node = null
  if(type === 3) {
    return document.createTextNode(vnode.value)
  }else if(type === 1) {
    _node = document.createElement(vnode.tag)
    let data = vnode.data
    Object.keys(data).forEach(key => {
      let attrName = key
      let attrValue = data[key]
      _node.setAttribute(attrName, attrValue)
    })
    vnode.children.forEach(subVNode => {
      _node.appendChild(parseVNode(subVNode))
    })
  }
  return _node
}
```