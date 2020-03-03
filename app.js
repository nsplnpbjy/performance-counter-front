//app.js
App({
  onLaunch: function () {
    var that = this;
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (res.code) {
          wx.request({
            url: 'http://localhost:8031/loginGetOpenid',
            method: 'POST',
            data: {
              "code": res.code
            },
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            success(res) {
              console.log(res.data)
              //判断后端返回的用户id是否为空，是则说明此用户尚未注册，跳转至注册页面
              if(res.data.id==null){
                
                wx.navigateTo({
                  url: '/pages/regist/regist',
                  success: function(res) {},
                  fail: function(res) {},
                  complete: function(res) {},
                })
              }
              //如果用户已经注册，拥有openid，就按照用户的角色进入不同页面
              else{
                that.globalData.userRole = res.data.role;
                that.globalData.userId = res.data.id;
                console.log(that.globalData.userRole);
                //如果用户的角色是领导则进入leader界面
                if (that.globalData.userRole == "领导") {
                  wx.navigateTo({
                    url: '../leader/leader',
                    success: function (res) { },
                    fail: function (res) { },
                    complete: function (res) { },
                  })
                }
                else if (that.globalData.userRole == "团队长") {
                  wx.navigateTo({
                    url: '../teamLeader/teamLeader',
                    success: function (res) { },
                    fail: function (res) { },
                    complete: function (res) { },
                  })
                }
                else if (that.globalData.userRole == "员工") {
                  wx.navigateTo({
                    url: '../worker/worker',
                    success: function (res) { },
                    fail: function (res) { },
                    complete: function (res) { },
                  })
                }
              }
            }
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    userRole: null,
    userId:null
  }
})