//Page Object
// 引入用来发送请求的方法
import { request} from "../../request/index.js"
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({
  data: {
    // 轮播图数组
    swiperList: [],
    // 导航数组
    cateList: [],
    // 楼层数据
    floorList: [] 
  },
  //options(Object)
  onLoad: function(options) {
    this.getSwiperList()
    this.getCateList()
    this.getFloorList()
  },
  // 发送异步请求  获取轮播图的数据
  async getSwiperList () {
    let res = await request({ url: 'https://api.zbztb.cn/api/public/v1/home/swiperdata'})
    this.setData({
      swiperList: res.data.message
    })
  },
  // 发送异步请求  获取分类导航的数据
  async getCateList () {
    let res = await request({ url: 'https://api.zbztb.cn/api/public/v1/home/catitems'})
    this.setData({
      cateList: res.data.message
    })
  },
  // 发送异步请求  获取楼层的数据
  async getFloorList () {
    let res = await request({ url: 'https://api.zbztb.cn/api/public/v1/home/floordata'})
    this.setData({
      floorList: res.data.message
    })
  },
  onReady: function() {
    
  },
  onShow: function() {
    
  },
  onHide: function() {

  },
  onUnload: function() {

  },
  onPullDownRefresh: function() {

  },
  onReachBottom: function() {

  },
  onShareAppMessage: function() {

  },
  onPageScroll: function() {

  },
  //item(index,pagePath,text)
  onTabItemTap:function(item) {

  }
});
  