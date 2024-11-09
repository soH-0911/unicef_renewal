$(function(){
    $('.paging-list a').click(function(){
        $('.paging-list a').removeClass('on');
        $(this).addClass('on');
    });
})