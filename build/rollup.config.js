const path = require('path')

export default {
  input: path.resolve(__dirname, '../', 'src/dom7.js'),
  output: {
    file: 'dist/dom7.js',
    format: 'umd',
    name: '$'
  }
}