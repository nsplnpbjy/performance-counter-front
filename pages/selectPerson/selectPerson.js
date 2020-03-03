// pages/selectPerson/selectPerson.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

    isHidden:true,
    reason:null,
    things:null,
    money:null,
    userId:null,
    searchName:null,
    items:null,
    split:null,//用这个东西把下面三个全部拼接起来
    selectedName:null,
    selectedId:null,
    selectedSplitWay:null,
  },
  inputSearchName:function(e){
    this.setData({
      searchName: e.detail.value
    })
  },
  search:function(){
    var that=this;
    that.setData({
      isHidden:false
    })
    wx.request({
      url: 'http://localhost:8031/searchUser',
      data: {
        "searchName":that.data.searchName
      },
      header: {},
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        that.setData({
          items : res.data
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  selectOne:function(e){
    this.setData({
      selectedId: e.currentTarget.dataset.id,
      selectedName: e.currentTarget.dataset.name,
      splitValue:null,
    })
    
  },
  selectedSplitWayInput:function(e){
    this.setData({
      selectedSplitWay: e.detail.value
    });
  },
  detachSplitWay:function(e){
    var that=this;
    if(that.data.split==null){
      that.setData({
        split:  '\n'+that.data.selectedId + ',' + that.data.selectedName + ',' + that.data.selectedSplitWay + ';\n'
      })
    }
    else {    
       that.setData({
          split : that.data.split + that.data.selectedId+','+that.data.selectedName+','+that.data.selectedSplitWay+';\n'
         })
        }
    wx.showToast({
      title: '增加成功',
      icon: '',
      image: '',
      duration: 1700,
      mask: true,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
    console.log(that.data.split);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let getReason = JSON.parse(options.strReason);
    let getThings = JSON.parse(options.strThings);
    let getMoney = JSON.parse(options.strMoney);
    this.setData({
      reason: getReason,
      things:getThings,
      money:getMoney,
      userId: app.globalData.userId
    })
  },
  sendAllToService:function(){
    var that = this;
    wx.request({
      url: 'http://localhost:8031/newSpeReq',
      data: {
        "rewardReason": that.data.reason,
        "rewardThings": that.data.things,
        "rewardToatle": that.data.money,
        "rewardSplit": that.data.split,
      },
      header: {},
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        wx.showToast({
          title: '提交成功',
          icon: '',
          image: '',
          duration: 1700,
          mask: true,
          success: function(res) {
            setTimeout(function(){
              wx.navigateBack({
                delta: 2,
              })
            },1700)
          },
          fail: function(res) {},
          complete: function(res) {},
        })
      },
      fail: function(res) {
        console.log(that.data.reason);
        console.log(that.data.things);
        console.log(that.data.money);
        console.log(that.data.split);
      },
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