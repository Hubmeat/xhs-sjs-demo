// tools.wxs
const moduleB = require('./b.sjs')
const moduleC = require('./c.sjs')

module.exports.bName = moduleB.name

exports.sayHi = moduleB.sayHi

exports.getCNameAndModuleBName = function (x) {
  console.log('x', x)
  return moduleC.getCNameAndModuleBName(x)
}
