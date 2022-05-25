var startX = 0
var startY = 0
var lastLeft = 50
var lastTop = 50
function touchstart(event, ins) {
  var touch = event.touches[0] || event.changedTouches[0]
  startX = touch.pageX
  startY = touch.pageY
  console.log('touch start ins :', ins)
  ins.callMethod('testCallmethod', {
    a: 1,
    b: 2,
    c: function () {
      console.log('ccc')
    },
  })
}
function touchmove(event, ins) {
  var touch = event.touches[0] || event.changedTouches[0]
  var pageX = touch.pageX
  var pageY = touch.pageY
  var left = pageX - startX + lastLeft
  var top = pageY - startY + lastTop
  startX = pageX
  startY = pageY
  lastLeft = left
  lastTop = top
  // console.log('idff', pageX - context.startX, left, top)
  ins.selectComponent('.movable').setStyle({
    left: left + 'px',
    top: top + 'px',
  })
  // console.log('get data', JSON.stringify(ins.selectComponent('.movable')[0].getData()))
  // console.log('get data set', JSON.stringify(ins.selectComponent('.movable')[0].getDataset()))
  // console.log('test select', ins.selectComponent('.movable')[0].selectComponent('.dd'))
}
module.exports = {
  touchstart: touchstart,
  touchmove: touchmove,
}
