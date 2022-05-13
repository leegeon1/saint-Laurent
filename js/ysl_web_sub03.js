$(function(){
    var cnt2art = $('.content.cnt02 .article');
    var cnt2txt = $('.content.cnt02 .texts');
    var wd = $(window).width();
    if(wd >= 1025){
        // pc 스크립트
        cnt2art.children('.image').click(function(){
            $(this).next().css('height','200px');
        });
        cnt2txt.find('i:eq(0)').click(function(){
            $(this).parent().css('height','0px');
        });
    } else if(wd >= 420 && wd <= 1025){
        cnt2art.children('.image').click(function(){
            $(this).next().css('height','200px');
        });
        cnt2txt.find('i:eq(0)').click(function(){
            $(this).parent().css('height','0px');
        });
    } else {
        cnt2art.children('.image').click(function(){;
            $(this).next().css('height','160px');
        });
        cnt2txt.find('i:eq(0)').click(function(){
            $(this).parent().css('height','0px');
        });
    }

    $('.nav>li').eq(3).mouseover(function(){
        $('.menu>li').css({
            display : 'block',
            opacity : '1'
        });
    });
    $('.menu').mouseleave(function(){
        $('.menu>li').css({
            display : 'none'
        });
        
    });
});