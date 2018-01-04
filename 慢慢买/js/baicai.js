$(function(){

    // 获取手指在轮播图元素上的一个滑动方向（左右）

    // 获取界面上轮播图容器
    var $carousels = $('.carousel');
    var startX,endX;
    // 在滑动的一定范围内，才切换图片
    var offset = 50;
    // 注册滑动事件
    $carousels.on('touchstart',function (e) {
        // 手指触摸开始时记录一下手指所在的坐标x
        startX = e.originalEvent.touches[0].clientX;

    });
    $carousels.on('touchmove',function (e) {
        // 目的是：记录手指离开屏幕一瞬间的位置 ，用move事件重复赋值
        endX = e.originalEvent.touches[0].clientX;
    });
    $carousels.on('touchend',function (e) {
        //console.log(endX);
        //结束触摸一瞬间记录手指最后所在坐标x的位置 endX
        //比较endX与startX的大小，并获取每次运动的距离，当距离大于一定值时认为是有方向的变化
        var distance = Math.abs(startX - endX);
        if (distance > offset){
            //说明有方向的变化
            //根据获得的方向 判断是上一张还是下一张出现
            $(this).carousel(startX >endX ? 'next':'prev');
        }
    })
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

    getinlanddiscount(pagesize,start);
});


//上拉加载
function getinlanddiscount(pagesize,start){
    //console.log('jjjj');
    $.ajax({
        url:'http://127.0.0.1:9090/api/getbaicaijiaproduct',
        data:{'titleid':0},
        success:function(data){
            // console.log(data);
            var productdata=[];
            for (var i = start;i<pagesize;i++){
                productdata.push(data.result[i]);
            }
            var html = template('productTmp',{'result':productdata});
            $('.bd ul').append(html);
        }
    })
}
var pagesize=4;
var start=0;
$(window).scroll(function () {
    var scrollTop = $(this).scrollTop();//滚出去的距离;
    var scrollHeight = $(document).height();//页面高度;
    var windowHeight = $(this).height();//window的高度;
    console.log(windowHeight + ':' + scrollTop + ':' + scrollHeight);
    if (scrollTop + windowHeight ==scrollHeight) {
        start=pagesize;
        pagesize += 4;
        if(pagesize>=20){
            pagesize=20;
        }
        getinlanddiscount(pagesize,start)
    }
});
