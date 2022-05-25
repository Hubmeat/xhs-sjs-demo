exports.getName = function (event, ownerInstance) {
  console.log('SJS 事件 event:', event)
  console.log('SJS 事件 event.instance:', event.instance)
  console.log('SJS 事件 event 第二个参数 ownerInstance:', ownerInstance)
}

let startX = 0
let startY = 0
let lastLeft = 50
let lastTop = 50

function touchstart(event, ins) {
  const touch = event.touches[0] || event.changedTouches[0]
  console.log('touch', event.touches[0] || event.changedTouches[0])
  startX = touch.pageX
  startY = touch.pageY
  console.log('touch start ins :', ins)
  ins.callMethod('testCallmethod', {
    a: 1,
    b: 2,
    c() {
      console.log('ccc')
    },
  })
}
function touchmove(event, ins) {
  const touch = event.touches[0] || event.changedTouches[0]
  const pageX = touch.pageX
  const pageY = touch.pageY
  const left = pageX - startX + lastLeft
  const top = pageY - startY + lastTop
  startX = pageX
  startY = pageY
  lastLeft = left
  lastTop = top
  // console.log('idff', pageX - context.startX, left, top)
  console.log('ins.selectComponent', ins, ins.selectComponent('.movable'))
  ins.selectComponent('.movable').setStyle({
    left: `${left}px`,
    top: `${top}px`,
  })
  // console.log('get data', JSON.stringify(ins.selectComponent('.movable')[0].getData()))
  // console.log('get data set', JSON.stringify(ins.selectComponent('.movable')[0].getDataset()))
  // console.log('test select', ins.selectComponent('.movable')[0].selectComponent('.dd'))
}

function onClick(event, ownerInstance) {
  console.log(
    'event getDataset()',
    JSON.stringify(event.instance.getDataset()),
    event.instance.getDataset(),
  )
  // event.instance.addClass('addss sadasd, asdasd=123123', 'asdasd', 'xxx', '$$$$')
  event.instance.addClass('add')
  console.log('instance.hasClass add:', event.instance.hasClass('add'))
  console.log('ownerInstance  getDataset()', ownerInstance.getDataset())

  setTimeout(() => {
    event.instance.removeClass('add')
  }, 2000)
}

module.exports = {
  sjsClick: onClick,
  touchstart,
  touchmove,
}
