$(document).ready(function () {
    // console.log(document.querySelector('path').getTotalLength());

//page2만 네비 색상 바꾸기
    $(window).scroll(function () {
        var scrollT = $(this).scrollTop();
        var scrollT;
    if (scrollT > 400){
        $('.header2').addClass('bg_change');
    }else{
        $('header.2').removeClass('bg_change');
    }
    });
    //product img
    var pdimg = $('.pd_big_img>img');
    $('.pd_big_img button').on('click', function () {
        $('.pd_big_img button').text('C L O S E');
        $(pdimg).data('overflow:visible');
    });
    
    //product menu
    
    //product recom slider
    var mySwiper3 = new Swiper ('.recom.swiper-container', {
        slidesPerView:'auto',
        spaceBetween:20,
        centeredSlides:true,
        draggable: true,
        a11y: {
            //prevSlideMessage: '이전 슬라이드',
            //nextSlideMessage: '다음 슬라이드',
            firstSlideMessage: '첫번째 슬라이드',
            lastSlideMessage: '마지막 슬라이드',
          },
        pagination: {
            el: '.swiper-pagination',
            type:'bullets',
            clickable : true
        }
    });
});