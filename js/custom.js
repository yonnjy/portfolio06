$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        $('.__move').each(function () {
            if (sct + $(window).innerHeight() - 400 > $(this).offset().top) {
                $(this).addClass('on');
            } else {
                $(this).removeClass('on');
            }
        });

        let hsct = $(window).scrollTop();
        hsct > 0 ? $('.header').addClass('on') : $('.header').removeClass('on');
    });

    $('.gnb>ul>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
            $(this).next().stop().slideToggle();
            $(this).parent().siblings().find('.sub').slideUp();
        }
    });

    $('.btn_ham').on('click', function () {
        $('.header .gnb').toggleClass('on');
        $('.header .login').toggleClass('on');
    });

    $(window).on('resize', function () {
        $('.header .gnb').removeClass('on');
        $('.sub').removeAttr('style');
    });

    $('.main_slide').slick({
        arrows: false,
        fade: true,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.main_vi .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev');
    });
    $('.main_vi .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext');
    });

    $('.banner_slide').slick({
        arrows: false,
        dots: true,
    });

    $('.banner_slide').on('init afterChange', function () {
        $(this).addClass('on');
    });

    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.btn_side').fadeIn(50);
        } else {
            $('.btn_side').fadeOut(50);
        }
    });

    $('.chat_bot').on('click', function(){
        $(this).parent().toggleClass('on');
    });

    $('.btn_side .chat_wrap>span').on('click', function(){
        $('.btn_side').removeClass('on');
    })
});