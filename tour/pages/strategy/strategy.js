Page({
  data: {
    imgs:[
      {src:'/img/index/tour_1.jpg',title:'月球一日游'},
      {src:'/img/index/tour_2.jpg',title:'太阳系环游一周'},
      {src:'/img/index/tour_3.jpg',title:'地心深渊'}
    ]
  },
  goDetail:function(event){
    console.log(event.currentTarget.dataset.item);
    wx.navigateTo({
      url: '/pages/detail/detail',
      events: {
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        acceptDataFromOpenedPage: function(data) {
          console.log(data)
        },
        someEvent: function(data) {
          console.log(data)
        }
      },
      success: function(res) {
        console.log(res);
      }
    })
  },
  onLoad: function () {

  }
})