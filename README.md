# 微信小程序 新闻 news
## 用到的API
* http://v.juhe.cn/toutiao/index?type={}&key={获取的key值}
  
### 这个API是在聚合数据上进行实名验证后得到的一个免费API，后面的key值是获取数据后的。我的key值：ec7572c9e7f97abc00cf8b135022f9a2
### type值
* 头条 -- top
* 社会 -- shehui
* 国内 -- guonei
* 国际 -- guoji
* 娱乐 -- yule
* 体育 -- tiyu
* 军事 -- junshi
* 科技 -- keji
* 财经 -- caijing
* 时尚 -- shishang
  
## 在开发过程中，利用了wxml和wxss的引用，所以创建了public文件

## 新闻头部的导航条
### 利用touchmove和toushstart事件，获取按下后的初始位置和结束位置，改变导航条的位置。代码如下：
  
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
         start:function(e){
           var s=e.touches[0].pageX
           this.setData({
             firstX:s
           })
         }   
      
      
## 由于获取的API只有首页新闻列表，所以没有进行后续处理
