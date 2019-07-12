(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.$ = factory());
}(this, (function () { 'use strict';

  class Dom7 {
    constructor (arr) {
      for (let i = 0; i < arr.length; i++) {
        this[i] = arr[i];
      }
      this.length = arr.length;
      return this
    }
  }

  function $ (selector, context) {
    let arr = [];
    let i = 0;
    if (!context && selector && selector instanceof Dom7) {
      return selector
    }

    if (selector) {
      // String
      if (typeof selector === 'string') {
        let els;
        if (!context && selector[0] === '#') {
          // Pure ID selector
          els = [document.getElementById(selector.trim().split('#')[1])];
        } else {
          // Other selector
          els = (context || document).querySelectorAll(selector.trim());
        }
        for (i = 0; i < els.length; i++) {
          if (els[i]) arr.push(els[i]);
        }
      }
    } else if (selector.nodeType || selector === window || selector === document) {
      arr.push(selector);
    } else if (selector.length > 0 && selector[0].nodeType) {
      for (i = 0; i < selector.length; i++) {
        arr.push(selector[i]);
      }
    }
    return new Dom7(arr)
  }

  $.fn = Dom7.prototype;
  $.Class = Dom7;
  $.Dom7 = Dom7;

  function addClass (className) {
    if (typeof className === 'undefined') {
      return this
    }
    const classes = className.split(' ');
    for (let i = 0; i < classes.length; i++) {
      for (let j = 0; j < this.length; j++) {
        if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') {
          this[j].classList.add(classes[i]);
        }
      }
    }
    return this
  }

  var Methods = /*#__PURE__*/Object.freeze({
    addClass: addClass
  });

  [Methods].forEach(gruop => {
    Object.keys(gruop).forEach(methodName => {
      $.fn[methodName] = gruop[methodName];
    });
  });

  return $;

})));
