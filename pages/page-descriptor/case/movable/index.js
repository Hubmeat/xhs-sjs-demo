// pages/movable/movable.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    left: 50,
    top: 50,
    taptest: 'taptest',
    show: true,
    dataObj: {
      obj: 1,
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    setTimeout(() => {
      this.setData({
        // show: false,
      })
    }, 3000)
  },
  taptest() {
    this.setData({
      show: false,
    })
  },
  testCallmethod(a, b, c) {
    console.log('-x-xxxxx', a, b, c)
  },
})
