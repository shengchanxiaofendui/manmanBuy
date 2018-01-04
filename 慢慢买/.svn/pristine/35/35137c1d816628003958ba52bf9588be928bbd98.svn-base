/**
 * Created by ���� on 2018/1/2.
 */
$(function(){
    getTop10();
    getBrandTop10();
    setTitle();
});


//获取热门品牌
function getTop10() {

    var id = getQueryString('brandtitleid');

    console.log(id);
    $.ajax({
        url:'http://127.0.0.1:9090/api/getbrand',
        data:{'brandtitleid':id},
        success:function(data){
            console.log(data);
            var html = template('brandTmp',data);
            $('.top10brand ul').html(html);
            $('.top10brand ul').html(template('brandTmp',data));

        }
    })
}

//获取品牌
function getBrandTop10(){
    var id = getQueryString('brandtitleid');
    $.ajax({
        url:'http://127.0.0.1:9090/api/getbrandproductlist',
        data:{
            brandtitleid:id,
            pagesize:4
        },
        success:function(data){
            console.log(data);
            var html = template('productTmp',data);
            $('.top10product ul').html(html);
            productid = data.result[0].productId;
            comment(productid);
        }
    })
}

//获取评论
function comment(productid){
    $.ajax({
        url:'http://127.0.0.1:9090/api/getproductcom',
        data:{'productid':productid},
        success:function(data){
            console.log(data);
            var html = template('commentTmp',data);
            $('.comment ul').html(html);
        }
    })
}


//根据url参数设置标题
function setTitle(){

    var title = getQueryString('brandTitle');

    var brandTitle = title+'哪个牌子好';
    var productTitle = title+'产品销量排行';
    var commentTitle = title+'最有用的用户评论';

    $('.nav span').html(brandTitle);
    $('.top10brand .title').html(brandTitle);
    $('.top10product .title').html(productTitle);
    $('.comment .title').html(commentTitle);
}


//获取url中的参数并且解决中文乱码问题
function getQueryString(key) {
    var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
    var result = window.location.search.substr(1).match(reg);
    return result ? decodeURIComponent(result[2]) : null;
}