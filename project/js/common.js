$(function(){
//            左侧固定栏的点击效果
    $('#menubtn').click(function(){
        $(this).toggleClass('open');
        $(this).parent().toggleClass('hide').siblings('.main').toggleClass('small');
    });
    $('#aside-menu li').hover(function(){
        if($('#aside-nav').hasClass('hide')){
            var w=$(this).offset().left;
            var h=$(this).offset().top;
            $('.aside-nav-hover .nav-text').text($(this).attr('data-tip'));
            $('.aside-nav-hover').css({'left':w+50,'top':h}).show();
        }
    },function(){
        $('.aside-nav-hover').hide();
    });
});
