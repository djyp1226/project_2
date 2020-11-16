$(document).ready(function () {
 
    //product img 
    var _pdimg = $('.pd_big_img');
    var pd_big_hei = _pdimg.css('height');
    console.log(pd_big_hei);
    $('.pd_big_img button').on('click', function () {
        if ($(this).hasClass('active')) { //닫기
            $(this).text('MORE VIEW').removeClass('active');
            _pdimg.css({overflow: 'hidden',height: pd_big_hei});
        }else { //열기
            $(this).text('C L O S E').addClass('active');
            _pdimg.css({overflow: 'visible',height:'auto'});//css로 주기
        }         
    });

    //product menu
    $('.product_plus li button').on('click', function () {
        $(this).next().stop().slideToggle().parent().toggleClass('on');
    });
    
    //product recom slider
    var mySwiper3 = new Swiper ('.recom.swiper-container', {
        slidesPerView: 2.2,
        spaceBetween:0,
        // centeredSlides:true,
        draggable: true,
        a11y: {
            //prevSlideMessage: '이전 슬라이드',
            //nextSlideMessage: '다음 슬라이드',
            firstSlideMessage: '첫번째 슬라이드',
            lastSlideMessage: '마지막 슬라이드',
        }
    });
});