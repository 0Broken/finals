
const app = getApp()

Page({
  data: {
    avatarUrl:"/images/head.png",
    nickName:"点击获取头像和昵称"
  },
  // 事件处理函数
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  tel:function ()  {
    wx.makePhoneCall({
     phoneNumber: '10000000000' //仅为示例，并非真实的电话号码
    })
    },
  getUserProfile(){
    wx.getUserProfile({
      desc: '登录', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        this.setData({
          nickName: res.userInfo.nickName,
          avatarUrl: res.userInfo.avatarUrl
        })
        wx.setStorage({    //数据缓存方法
          key: 'nickName',   //关键字，本地缓存中指定的key
          data: res.userInfo.nickName,    //缓存微信用户公开信息，
          success: function() {      //缓存成功后，输出提示
            console.log('写入nickName缓存成功')
          },
          fail: function() {        //缓存失败后的提示
            console.log('写入nickName发生错误')
          }
        })
        wx.setStorage({    //数据缓存方法
          key: 'avatarUrl',   //关键字，本地缓存中指定的key
          data: res.userInfo.avatarUrl,    //缓存微信用户公开信息，
          success: function() {      //缓存成功后，输出提示
            console.log('写入avatarUrl缓存成功')
          },
          fail: function() {        //缓存失败后的提示
            console.log('写入avatarUrl发生错误')
          }
        })
      }
    }) 
  }
})
