## 渲染

```javascript
function render(element, parentNode) {
  if(typeof element === 'string' || typeof element === 'number') {
    return parentNode.appendChild(document.createTextNode(element))
  }
  let type = element.type
  let props = element.props
  if(type.isReactComponent) {
    let returnedElement = (new type()).render()
    type = returnedElement.type
    props = returnedElement.props
  }else {
    let returnedElement = type(props)
    type = returnedElement.type
    props = returnedElement.props
  }
  let domElement = document.createElement(type)
  for(let propName in props) {
    if(propName === 'className') {
      domElement.className = props[propName]
    } else if(propName === 'style') {
      let styleObj = props[propName]
      let cssText = Object.keys(styleObj).map(attr => {
        return `${attr.replace(/([A-Z])/g, function() {
          return '-' + arguments[1].toLowerCase()
        })}:${styleObj[attr]}`
      }).join(';')
    } else if(propName = 'children') {
      let children = Array.isArray(props.children) ?  props.children : [props.children]
      children.forEach(child=>render(child, domElement))
    } else {
      domElement.setAttribute(propName, props[propName])
    }
  }
}
```