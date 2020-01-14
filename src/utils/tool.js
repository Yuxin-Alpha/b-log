export const mapClasses = size => {
  const arr = []
  if (size === 1) {
    arr.push('size1')
  } else if (size === 2 || size === 3) {
    arr.push('size2')
  } else {
    arr.push('size3')
  }
  return action => {
    if (action === 'left') {
      arr.push('font--left')
      arr.push('blue_bubble')
    } else {
      arr.push('font--right')
      arr.push('pupple_bubble')
    }
    return arr
  }
}