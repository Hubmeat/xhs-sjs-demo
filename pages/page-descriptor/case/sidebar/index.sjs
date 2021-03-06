let newmark = 0
let startmark = 0
let status = 0
function touchstart(e, ins) {
  const pageX = (e.touches[0] || e.changedTouches[0]).pageX
  startmark = newmark = pageX
}
function touchmove(e, ins) {
  const pageX = (e.touches[0] || e.changedTouches[0]).pageX
  newmark = pageX
  // var data = ins.getData()
  const data = {
    windowWidth: e.target.dataset.width,
  }
  if (startmark < pageX) {
    if (data.windowWidth * 0.75 > Math.abs(newmark - startmark)) {
      // console.log(111, JSON.stringify(event), context.newmark - context.startmark)
      ins.selectComponent('.page-top').setStyle({
        transform: `translateX(${Math.min(
          data.windowWidth * 0.75,
          (status == 1 ? data.windowWidth * 0.75 : 0) + newmark - startmark,
        )}px)`,
      })
    }
  }
  if (startmark > pageX) {
    ins.selectComponent('.page-top').setStyle({
      transform: `translateX(${Math.max(
        0,
        (status == 1 ? data.windowWidth * 0.75 : 0) + newmark - startmark,
      )}px)`,
    })
  }
}
function touchend(e, ins) {
  const pageX = (e.touches[0] || e.changedTouches[0]).pageX
  newmark = pageX
  // var data = ins.getData()
  const data = {
    windowWidth: e.target.dataset.width,
  }
  if (startmark < pageX) {
    if (data.windowWidth * 0.2 < Math.abs(newmark - startmark)) {
      ins.selectComponent('.page-top').setStyle({
        transform: `translateX(${data.windowWidth * 0.75}px)`,
      })
      status = 1 // 展开状态
    } else {
      ins.selectComponent('.page-top').setStyle({
        transform: 'translateX(0px)',
      })
      status = 0 // 收起状态
    }
  }
  if (startmark > newmark) {
    ins.selectComponent('.page-top').setStyle({
      transform: 'translateX(0px)',
    })
    status = 0 // 收起状态
  }
}
module.exports = {
  touchstart,
  touchmove,
  touchend,
}
