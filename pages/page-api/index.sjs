module.exports.testParseInt = parseInt('123', 5)
module.exports.testParseFloat = parseFloat(4.567) * 2.0 * Math.PI
module.exports.testIsNaN = function (x) {
  if (isNaN(x)) {
    return 'Not a Number!'
  }
  return x
}

module.exports.testIsFinite = function (x) {
  if (isFinite(1000 / x)) {
    return 'Number is NOT Infinity.'
  }
  return 'Number is Infinity!'
}

var str = null
module.exports.testEncodeURI = function () {
  var uri = 'https://www.xiaohongshu.com/?x=1&b=2'
  str = encodeURI(uri)
  return str
}

module.exports.testDecodeURI = function () {
  return decodeURI(str)
}

var encodeUri = null
module.exports.testEncodeURIComponent = function () {
  encodeUri = encodeURIComponent('https://www.xiaohongshu.com/?name=ståle&car=saab')
  return encodeUri
}

module.exports.testDecodeURIComponent = function () {
  return decodeURIComponent(encodeUri)
}

module.exports.testGetDate = getDate()

module.exports.testGetRegExp = getRegExp('^.js$')
