Page({
  data:{
    lists:[
      {type:"top",name:"头条"},
      {type:"shehui",name:"社会"},
      {type:"guonei",name:"国内"},
      {type:"guoji",name:"国际"},
      {type:"yule",name:"娱乐"},
      {type:"tiyu",name:"体育"},
      {type:"junshi",name:"军事"},
      {type:"keji",name:"科技"},
      {type:"caijing",name:"财经"},
      {type:"yule",name:"娱乐"}
    ],
    left: 0,
    type: 'top',
    firstX:'',
    lastX: '',
    news:""
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
    this.http()
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
   
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
   
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
    
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
    
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
    
  },
  http:function(){
    var self=this
    wx.request({
      url: 'http://v.juhe.cn/toutiao/index?type='+this.data.type+'&key=ec7572c9e7f97abc00cf8b135022f9a2',
      success:function(res){
        console.log(res)
        self.setData({
          news: res.data.result.data
        })
      }
    })
  },
  touch:function(e){
    var last=e.touches[0].pageX
    var first=this.data.firstX
    var lLeft=this.data.left+(last-first)
    if(lLeft<=-500){
      this.setData({
        left: -500
      })
    }else if(lLeft>=0){
      this.setData({
        left: 0
      })
    }else if(lLeft<0&&lLeft>-500){
      this.setData({
        left: lLeft
      })
    }
  },
  click:function(e){
    var index = parseInt(e.currentTarget.dataset.index)
    var t=this.data.lists[index].type
    this.setData({
      type: t
    })
    this.http()
  },
  start:function(e){
    var s=e.touches[0].pageX
    this.setData({
      firstX:s
    })
  }
})
