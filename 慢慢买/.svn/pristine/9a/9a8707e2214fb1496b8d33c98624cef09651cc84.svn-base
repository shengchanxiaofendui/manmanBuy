$(function(){
    discountproduct();
})

function discountproduct(){
    var productid = getUrlParam('productid');
    // console.log(productid);
    $.ajax({
        url:'http://127.0.0.1:9090/api/getdiscountproduct',
        data: { 'productid': productid},
        success:function(data){
            // $('.discuss').html(data.result[0].productComment);
            // console.log(data);
            var html = template('discountproductTep',data);
            $('#main').html(html)

        }
    })
}
// a标签获取URL传过来的参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}