// pages/index/detail.js
var that;

Page( {

  /**
   * 页面的初始数据
   */
  data: {
    hideOrNot: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function ( options ) {
    that = this;
    wx.request( {
      url: 'https://api.douban.com/v2/book/' + options.id,
      method: 'GET',
      success: function ( res ) {
        wx.setNavigationBarTitle( {
          title: '《' + res.data.title + '》详情'
        } )
        that.setData( {
          book: res.data
        } )
      }
    } )
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
    that.setData( {
      hideOrNot: false
    } )
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
} )
