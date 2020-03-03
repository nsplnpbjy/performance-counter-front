// pages/speReq/speReq.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    resaon:null,
    things:null,
    money:null,
    userId:null,
  },

  inputReason: function(e){
    var that=this;
    that.setData({
      reason: e.detail.value
    });
  },
  inputThings:function(e){
    var that=this;
    that.setData({
      things: e.detail.value
    });
  },
  inputMoney:function(e){
    var that=this;
    that.setData({
      money:e.detail.value
    })
  },
  selectSplitPerson:function(){
    let strReason = JSON.stringify(this.data.reason);
    let strThings = JSON.stringify(this.data.things);
    let strMoney = JSON.stringify(this.data.money);
    if(strReason!=null&&strThings!=null&&strMoney!=null){
      wx.navigateTo({
        url: '../selectPerson/selectPerson?strReason='+strReason+'&strThings='+strThings+'&strMoney='+strMoney,
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    }
    else{
      wx.showToast({
        title: '请输入信息',
        icon: 'none',
        image: null,
        duration: 1700,
        mask: true,
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    }
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