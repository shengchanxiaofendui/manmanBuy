// 点击更多
$(function(){
    $('.row').on('click','.toggle',function(){
        console.log('dianji')
            $('.row').toggleClass('hid');

    })
   
})

$(function(){
    getIndeMenu();
    getDiscount();
   
})
//获取主页导航
function getIndeMenu(){
    $.ajax({
        url:'http://127.0.0.1:9090/api/getindexmenu',
        success:function(data){
            console.log(data);
            var html = template('indexMenuTmp',data);
            $('#nav .row').html(html);
            // console.log($('.row div').eq(7))
            $('.row div').eq(7).addClass('toggle');
            // $('.row div').eq(10).addClass(function(){
            //     window.location.href="../citynav.html";
            // })

        }
    })
}
//获取折扣的
function getDiscount(){
    $.ajax({
        url:'http://127.0.0.1:9090/api/getmoneyctrl',
        success:function(data){
            console.log(data);
            //console.log($('.media').val());
            var html = template('discountTmp',data);
            $('.discount-content').html(html);
        }
    })
}

