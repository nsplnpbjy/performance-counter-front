// pages/worker/worker.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userId:null,
    isRecList:"false"

  },
  //排名列表,后期针对员工要增加排名列表进入限制,如果登录工号app.gloabelData.userId不在recList表里，不能进入这个功能
  personList: function () {
    var that = this;
    wx.request({//询问服务器本用户的id是否在本月recList表里
      url: 'http://localhost:8031/isInRecList',
      data: {
        "id": that.data.userId
      },
      header: {},
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        that.setData({
          isRecList: res.data.isRecList
        });
        console.log(that.data.isRecList)
        if (that.data.isRecList == "true") {//此处判断服务器返回的消息，如果用户在本月的recList表里，则可以进入排名列表
          wx.navigateTo({
            url: '../personList/personList',
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },
          })
        }
        else {
          wx.showToast({
            title: '你未被选取参与本次绩效考核推荐',
            icon: 'none',
            image: '',
            duration: 1700,
            mask: true,
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },
          })
        }
      },
      fail: function(res) {},
      complete: function(res) {},
    })
    
  },
  //专项申请
  speReq: function () {
    wx.navigateTo({
      url: '../speReq/speReq',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userId: app.globalData.userId
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