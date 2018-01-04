$(function(){
    getsitenav();
})

function getsitenav(){
    $.ajax({
        url:'http://127.0.0.1:9090/api/getsitenav',
        success:function(data){
            console.log(data);
            var html = template('citynavTmp',data);
            $('.classm').html(html);
        }
    })
}