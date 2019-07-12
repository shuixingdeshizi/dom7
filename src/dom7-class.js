class Dom7 {
  constructor (arr) {
    for (let i = 0; i < arr.length; i++) {
      this[i] = arr[i]
    }
    this.length = arr.length
    return this
  }
}

export default Dom7