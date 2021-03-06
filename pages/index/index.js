//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '云南电信企信部绩效管理',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  enterSys: function(){
    var that=app;
    console.log(that.globalData.userRole)
    if(that.globalData.userRole=="领导"){
      wx.navigateTo({
        url: '../leader/leader',
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    }
    else if(that.globalData.userRole=="团队长"){
      wx.navigateTo({
        url: '../teamLeader/teamLeader',
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    }
    else if(that.globalData.userRole=="员工"){
      wx.navigateTo({
        url: '../worker/worker',
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    }
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
