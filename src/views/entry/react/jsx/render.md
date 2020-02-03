## 渲染

```javascript
function render(element, parentNode) {
  if(typeof element === 'string' || typeof element === 'number') {
    return parentNode.appendChild(document.createTextNode(element))
  }
  let { type, props } = element
  if(type.isReactComponent) {
    { type, props }  = (new type()).render()
  }else {
    { type, props }  = type(props)
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
      let children = Array.isArray(props.children) ? props.children : [props.children]
    } else {
      domElement.setAttribute(propName, props[propName])
    }
  }
}
```