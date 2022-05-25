var moduleB = require('./b.sjs')

module.exports.cName = 'NAME_CCCCCC'

exports.getCNameAndModuleBName = function (cName) {
  return cName + '========' + 'CC' + moduleB.name
}
