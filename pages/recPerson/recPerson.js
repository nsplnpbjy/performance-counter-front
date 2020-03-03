// pages/recPerson/recPerson.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    optionTargetId:null,
    optionTargetName:null,
    resData:null,
    recReason:null,
    inputCache:null

  },
  reviewPerf:function(e){
    var that=this;
    that.setData({
      optionTargetId: e.currentTarget.dataset.optiontargetid,
      optionTargetName: e.currentTarget.dataset.optiontargetname
    });
    wx.navigateTo({
      url: '../halfYearPerf/halfYearPerf?id=' + that.data.optionTargetId+'&name='+ that.data.optionTargetName,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })

  },
  input:function(e){
    this.setData({
      recReason: e.detail.value
    })
    console.log(this.data.recReason)

  },
  vote:function(e){
    var that=this;
    that.setData({//从button上取值一定要所有字母小写
      optionTargetId: e.currentTarget.dataset.optiontargetid,
      inputCache:""
    })
    console.log(that.data.optionTargetId);
    console.log(that.data.recReason);
    wx.request({
      url: 'http://localhost:8031/recVote',
      data: {
        "id":that.data.optionTargetId,
        "recReason":that.data.recReason
      },
      header: {},
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        wx.showToast({
          title: '推荐成功',
          icon: 'none',
          image: '',
          duration: 1700,
          mask: true,
          success: function(res) {},
          fail: function(res) {},
          complete: function(res) {},
        })
        that.onLoad();
      },
      fail: function(res) {},
      complete: function(res) {},
    })
    

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.request({
      url: 'http://localhost:8031/getUserTable',
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