// tools.wxs
const moduleB = require('./b.sjs')

exports.catchTapTest = function (event, ownerInstance) {
  console.log(' ===== i am catch tap log ===== ')
}

exports.bindTapTest = function () {
  console.log(' ===== i am bind bind tap log ===== ')
}

module.exports.bName = moduleB.name
