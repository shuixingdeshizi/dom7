import $ from './$'

import * as Methods from './methods'

[Methods].forEach(gruop => {
  Object.keys(gruop).forEach(methodName => {
    $.fn[methodName] = gruop[methodName]
  })
})

export default $