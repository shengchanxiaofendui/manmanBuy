$(function(){
    // 请求数据
    var productid = getQueryString('productId');
    var commenCount = 0;
    // $(document).ready(function(){
    //     // var myScroll = new IScroll('#wrapper',{
    //     //         mouseWheel: true,
    //     //         scrollbars: true
    //     // });
    //   });
    //获取单个商品信息
    $.ajax({
        url: 'http://127.0.0.1:9090/api/getproduct',
        data: {
            productid: productid
        },
        success: function(data){
            console.log(data);
            var html = template('productcontentTmp',data);
            // console.log(html);
            $('#main .product-detail').html(html);
        }
    })
    //获取单个商品的评论
    $.ajax({
        url: 'http://127.0.0.1:9090/api/getproductcom',
        data: {
            productid: productid 
        },
        success: function(data){
            commenCount = data.result.length;
            var html = template('commencontentTmp',data);
            $('#main .bijia .commensList').html(html);
            setTimeout(() => {
                var myScroll = new IScroll('#wrapper',{
                    mouseWheel: true
                });
            }, 10);

        }
    })

    //点击按钮关闭底部下载框
    $('.closefix').click(function(){
        $('#app-promotion-bar').css('display','none');
    })




    
    function getQueryString(key) {
        var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
        var result = window.location.search.substr(1).match(reg);
        return result ? decodeURIComponent(result[2]) : null;
    }
})