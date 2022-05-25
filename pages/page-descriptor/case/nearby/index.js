const windowWidth = xhs.getSystemInfoSync().windowWidth
Page({
  data: {
    imgUrls: ['/images/1.jpeg', '/images/2.jpg', '/images/3.jpg', '/images/4.jpg'],
    imgSize: [
      {
        height: 150,
      },
      {
        height: 200,
      },
      {
        height: 150,
      },
      {
        height: 150,
      },
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 3000,
    duration: 500,
    left: 0,
    windowWidth,
  },
  changeIndicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots,
    })
  },
  swiperTransition1(e) {
    console.log('e.transition', e)
    this.setData({
      left: e.detail.x / 4,
    })
  },
  onReady() {},
  changeAutoplay(e) {
    this.setData({
      autoplay: !this.data.autoplay,
    })
  },
  intervalChange(e) {
    this.setData({
      interval: e.detail.value,
    })
  },
  durationChange(e) {
    this.setData({
      duration: e.detail.value,
    })
  },
})
