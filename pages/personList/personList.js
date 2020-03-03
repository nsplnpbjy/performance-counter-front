// pages/personList/personList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    optionId:null,
    resData:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  voteOption: function(e){
    var that =this;
    that.setData({
      optionId: e.currentTarget.dataset.optiontargetid
    })
    wx.request({
      url: 'http://localhost:8031/voteForUserInPerf',
      data: {
        "id":that.data.optionId
      },
      header: {},
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        wx.showToast({
          title: '投票成功',
          icon: 'none',
          image: '',
          duration: 1700,
          mask: true,
          success: function(res) {},
          fail: function(res) {},
          complete: function(res) {},
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://localhost:8031/getUserInPerf',
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        that.setData({
          resData:res.data
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})