// 入口函数
$(function () {

    var id = getQueryString('id');
    // console.log(id);
    getCouponDetail(id);

    showCoupon();
    hideCoupon();
})

function getCouponDetail(id) {

    $.ajax({
        url: "http://127.0.0.1:9090/api/getcouponproduct",
        data: {
            "couponid": id
        },
        success: function (data) {
            console.log(data);
            var html = template('coupondetailTmp', data);
            $('#main ul').html(html);
        }

    })
}

//获取url中的参数并且解决中文乱码问题
function getQueryString(key) {
    var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
    var result = window.location.search.substr(1).match(reg);
    return result ? decodeURIComponent(result[2]) : null;
}


// 点击优惠券显示遮罩层

function showCoupon() {
    $('#main').on('click', 'ul li', function() {

        $('.bespread').fadeIn();

        var img = $(this).data('img');
        console.log(img);
        $('#mask .box').html(img);
    });
}

// 点击遮罩层隐藏
function hideCoupon() {
    $('.bespread').on('click',function () { 
        $(this).fadeOut();
     });
}




// function showMask() {
//     $("#mask").css("height", $(document).height());
//     $("#mask").css("width", $(document).width());
//     $("#mask").show();
// }
// //隐藏遮罩层  
// function hideMask() {

//     $("#mask").hide();
// }