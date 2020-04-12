//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    tours: ['/img/index/tour_1.jpg', '/img/index/tour_2.jpg', '/img/index/tour_3.jpg'],
    services:[{
      icon:'/img/icon/time-icon.png',
      label:'定制旅游'
    },{
      icon:'/img/icon/time-icon.png',
      label:'经典路线'
    },{
      icon:'/img/icon/time-icon.png',
      label:'包车服务'
    }],
    hotTourDatas:[
      {src:'/img/index/tour_1.jpg',desc:'<日本6日游>深圳直飞',price:'¥ 4726 起'},
      {src:'/img/index/tour_2.jpg',desc:'<日本6日游>深圳直飞',price:'¥ 4726 起'},
      {src:'/img/index/tour_3.jpg',desc:'<日本6日游>深圳直飞',price:'¥ 4726 起'},
      {src:'/img/index/tour_1.jpg',desc:'<日本6日游>深圳直飞',price:'¥ 4726 起'}
    ],
    lines:[
      {src:'/img/index/tour_1.jpg',desc:'月球一日游',price:'$10000000000 起'},
      {src:'/img/index/tour_2.jpg',desc:'太阳系环游一周',price:'$∞'},
      {src:'/img/index/tour_3.jpg',desc:'地心深渊',price:'不要钱'}
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 500,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../category/category'
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
  }
})
