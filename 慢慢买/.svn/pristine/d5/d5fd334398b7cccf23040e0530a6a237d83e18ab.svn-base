$(function(){
    getinlanddiscount(pagesize,start);   
})

$('#productlist').on('click','.col-xs-6 a',function(){
    var productID=$(this).data('productid');
    // console.log(productID);
    window.location.href ='./discountproduct.html?productid='+productID
})
function getinlanddiscount(pagesize){
    $.ajax({
        url:'http://127.0.0.1:9090/api/getinlanddiscount',
        success:function(data){
            // console.log(data);
            var productdata=[];
            for (var i = start;i<pagesize;i++){
                productdata.push(data.result[i]);
            }
            var html = template('inlanddiscountTep',{'result':productdata});
            $('#productlist .row').append(html);
        }
    })
}
var pagesize=6;
var start=0;
$(window).scroll(function () {
    var scrollTop = $(this).scrollTop();//滚出去的距离;
    var scrollHeight = $(document).height();//页面高度;
    var windowHeight = $(this).height();//window的高度;
    // console.log(windowHeight + ':' + scrollTop + ':' + scrollHeight);
    if (scrollTop + windowHeight ==scrollHeight) {
        start=pagesize;
        pagesize += 4;
        if(pagesize>=20){
            pagesize=20;
        }
        getinlanddiscount(pagesize,start)
    }
});
