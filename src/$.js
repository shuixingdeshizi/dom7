import Dom7 from './dom7-class'

function $ (selector, context) {
  let arr = []
  let i = 0
  if (!context && selector && selector instanceof Dom7) {
    return selector
  }

  if (selector) {
    // String
    if (typeof selector === 'string') {
      let els
      if (!context && selector[0] === '#') {
        // Pure ID selector
        els = [document.getElementById(selector.trim().split('#')[1])]
      } else {
        // Other selector
        els = (context || document).querySelectorAll(selector.trim())
      }
      for (i = 0; i < els.length; i++) {
        if (els[i]) arr.push(els[i])
      }
    }
  } else if (selector.nodeType || selector === window || selector === document) {
    arr.push(selector)
  } else if (selector.length > 0 && selector[0].nodeType) {
    for (i = 0; i < selector.length; i++) {
      arr.push(selector[i])
    }
  }
  return new Dom7(arr)
}

$.fn = Dom7.prototype
$.Class = Dom7
$.Dom7 = Dom7

export default $