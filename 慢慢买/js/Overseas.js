$(function () {
    applyColours(page);
    nextPage();
    paging();
    a();
})
var page=0;
var pagination;
var b;
function applyColours(page) {
    $.ajax({
        url: 'http://127.0.0.1:9090/api/getmoneyctrl',
        data: {
            pageid: page,
        },
        success: function (data) {
            var html = template('content', data);
            $('#cxdiv ul').html(html);
            pagination = Math.ceil(data.totalCount / data.pagesize);
            for (var i = 0; i <= pagination-1; i++) {
                 $('<option value="'+i+'">'+(i+1)+'</option>').appendTo($('#section select'));
                if((i)==page){
                    b=$('#section select option[value="'+i+'"]');
                    console.log(b);
                    b.attr('selected','selected');
                 }
            }
            
        }
    })
}
// 上一页点击事件
function paging() {
    $('.top-page').on('click',function(){
        if(page<=0){
            return;
        }
        $('#section select').html('');
        page--;
        $('#section select option').html(page);
        applyColours(page);
    })
}
function nextPage(){
    $('.bottom-page').on('click',function(){
        if(page>=pagination-1   ){
            return;
        }
        page++;
        $('#section select').html('');
        applyColours(page);
        $('#section select option[selected="selected"]').html(page);
        console.log(page);
    })
}
var b;
function a(){
    $('#section select').on('change',function(){
        b=this.value;
        page=b;
        console.log(page)
        $('#section select').html('');
        applyColours(page);
    })
}