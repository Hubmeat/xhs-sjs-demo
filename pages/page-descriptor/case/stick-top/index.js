const height = xhs.getSystemInfoSync().windowHeight
Page({
  data: {
    sticky: false,
    opacity: 0,
    height,
  },
  // 滚动条监听
  onPageScroll(e) {
    // console.log('page scroll')
  },
  onShow() {},
  onReady() {},
})
