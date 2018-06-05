$(function(){
    // 底部加载
    $(".floor-bar").load("floor-bar.html", function () {
             
    });
    // 头部返回
    $('.team-add-title .icon-fanhui').click(e=>{
        window.history.go(-1);
    })
    
})
//获取url参数
function getQueryString(name) { 
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
    var r = window.location.search.substr(1).match(reg); 
    if (r != null) return unescape(r[2]); 
    return null; 
} 