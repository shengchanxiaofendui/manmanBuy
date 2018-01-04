$(function(){
    var categoryid = getQueryString('categoryid');
    var totalPage = 0;
    var pageid = 1;
    getData(pageid);
    //默认第一个focus
    $('#main .title .row div:eq(0)').find('a').focus();
    //tap栏切换
    $('#myTabs a').click(function (e) {
        e.preventDefault()
        $(this).tab('show');
        // $(this).parent().addClass('active').siblings().removeClass('active');
      })


    //点击按钮关闭底部下载框
    $('.closefix').click(function(){
        $('#app-promotion-bar').css('display','none');
    })

   
    function getData (pageid) {
        $.ajax({
            url: 'http://127.0.0.1:9090/api/getproductlist',
            data: {
                categoryid: categoryid,
                pageid: pageid
            },
            success: function(data){
                console.log(data);
                var html = template('categorydetailList',data);
                $('#main .productlist').html(html);
                setTimeout(() => {
                    var myScroll = new IScroll('#wrapper',{
                        mouseWheel: true
                    });
                }, 10);
                totalPage = Math.ceil(data.totalCount / data.pagesize);
                var option = '';
                // console.log($('.selection option').length)
                if(!$('.selection option').length) {
                    console.log($('.selection option').length);
                    for(var i=1; i<=totalPage; i++) {
                        option += '<option value="'+i+'">'+i+' / '+totalPage+'</option>';
                    }   
                }          
                $('.selectionlist').html(option); 
                $('.selectionlist option').eq(pageid-1).prop('selected',true);
                $('#main .title .row div:eq(0)').find('a').focus();
                
            }
        })
    
    }

    //分页page--
    $('.previous').click(function(){
        pageid--;
        if(pageid < 1){
            pageid = 1;
        }
        getData(pageid);
        $('.selectionlist option').eq(pageid-1).prop('selected',true);
    })

    //分页page++
    $('.next').click(function(){
        pageid++;
        if(pageid > 3){
            pageid = 3;
        }
        // console.log(pageid);
        getData(pageid);
        $('.selectionlist option').eq(pageid-1).prop('selected',true);
    })

    //选择页数后请求数据
    $('.selectionlist').change(function(){
        console.log('我被触发了');
        pageid = $('select option:selected').val();
        getData(pageid);
        document.body.scrollTop =0;
    })

    function getQueryString(key) {
        var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
        var result = window.location.search.substr(1).match(reg);
        return result ? decodeURIComponent(result[2]) : null;
    }
   
})