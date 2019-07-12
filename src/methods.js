function addClass (className) {
  if (typeof className === 'undefined') {
    return this
  }
  const classes = className.split(' ')
  for (let i = 0; i < classes.length; i++) {
    for (let j = 0; j < this.length; j++) {
      if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') {
        this[j].classList.add(classes[i])
      }
    }
  }
  return this
}

export {
  addClass
}