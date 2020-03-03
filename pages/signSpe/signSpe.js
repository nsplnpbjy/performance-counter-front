// pages/signSpe/signSpe.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    object:null,
    userId:null,
    reply:null,
    money:null,
  },
  inputRep:function(e){
    this.setData({
      reply: e.detail.value
    })
  },
  inputMoney:function(e){
    this.setData({
      money: e.detail.value
    })
  },
  decide:function(){
    var that = this;
    wx.request({
      url: 'http://localhost:8031/signRewardReq',
      data: {
        "isProve": that.data.reply,
        "proveMoney": that.data.money,
        "prover": that.data.userId,
        "rewardId": that.data.object.id,
      },
      header: {},
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        wx.showToast({
          title: '批复成功',
          icon: '',
          image: '',
          duration: 1700,
          mask: true,
          success: function(res) {
            setTimeout(function(){
              wx.navigateBack({
                delta: 1,
              })
            },1700)
          },
          fail: function(res) {},
          complete: function(res) {},
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let recv =JSON.parse(options.object);
    this.setData({
      object: recv,
       userId: app.globalData.userId,
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