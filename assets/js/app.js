$(document).ready(function(){
    
    $('.icon-respon-menu').click(function(){
        $('#site').toggleClass('open-respon-menu');
        $('.icon-respon-menu i').toggleClass('fa-bars fa-times');
    });
    $(window).resize(function(){
        if($(document).width() >= 1024 || $(document).width() < 1024)
        {
            $('#site').removeClass('open-respon-menu');
            $('.icon-respon-menu i').removeClass('fa-times').addClass('fa-bars');
        }
    });
    $(window).scroll(function(){
        if($(this).scrollTop() != 0)
        {
            $('.btn-top').stop().fadeIn(200);
        }
        else
        {
            $('.btn-top').stop().fadeOut(200);
        }
    });
    $('.btn-top').click(function () {
        $('body,html').stop().animate({scrollTop: 0}, 800);
    });
});