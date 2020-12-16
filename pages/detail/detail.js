// pages/detail/detail.js
Page({
  calling: function () {
     
    wx.makePhoneCall({
 
        phoneNumber: '',
 
        success: function () {
 
            console.log("拨打电话成功！")
 
        },
 
        fail: function () {
 
            console.log("拨打电话失败！")
 
        }
 
    })
}
  
})