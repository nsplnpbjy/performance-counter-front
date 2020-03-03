// pages/regist/regist.js
const app =getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    idInputValue:"",
    isHidden:true

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  input(e) {
    this.setData({
      idInputValue: e.detail.value
    })
  },
  btnClick() {
    var that=this;
    console.log(this.data.idInputValue) 
    wx.request({
      url: 'http://localhost:8031/regist',
      data: {"idInputValue":that.data.idInputValue},
      header: { 'content-type': 'application/x-www-form-urlencoded'},
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log(res.data)//用户注册成功就返回上一页
        if(res.data.isSuccessed == "true"){
          app.globalData.userRole = res.data.role;
          app.globalData.userId = res.data.id;
          wx.navigateBack({
            delta: 1,
          })
        }
        else{//注册失败则把提示工号错误的文字显示出来
          that.setData({
            isHidden:false
          })
        }
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  }
  //提交事件
})