// 入口函数
$(function () {
    getCouponInfo();
})



function getCouponInfo() {
    $.ajax({
        url: "http://127.0.0.1:9090/api/getcoupon",
        success: function (data) {
            console.log(data);
            var html = template("getCouponInfoTmp", data);
            $('.container .row').html(html);
        }
    })
} 