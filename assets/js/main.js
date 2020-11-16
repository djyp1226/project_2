$(document).ready(function () {

  var scrollT = $(this).scrollTop();
  var scrollT;

  //네비 색상 바꾸기
  $(window).scroll(function () {
    var scrollT = $(this).scrollTop();

    if (scrollT > 401) {
      $('#header').addClass('bg_change');
    } else {
      $('#header').removeClass('bg_change');
    }

  });

  //fade 
  var timer = 0;
  var scrollT = $(this).scrollTop();

  $(window).on('scroll', function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
      scrollT = $(this).scrollTop();

      $('.fade').each(function () {
        if (scrollT > $(this).offset().top - 500) $(this).addClass('on');
      });

      //best3 슬라이더
      var best = new Swiper('.best3', {
        pagination: {
          el: '.swiper-pagination',
          loop: 'true'
          // type: 'fraction',
          //clickable: true, //bullet 타입일 경우 버튼 클릭시 이동 가능함
        }
      });

      var mySwiper1 = new Swiper('.best3 ', {
        spaceBetween: 10, //각 슬라이더 사이 공간
        slidesPerView: 'auto', //한 화면에 보여질 슬라이더 개수 기본1
        centeredSlides: true, //슬라이더 가운데 중요 슬라이더 위치
        scrollbar: {
          el: '.swiper-scrollbar',
          draggable: true, //스크롤바를 직접 드래그해서 이동가능
        },
        a11y: {
          //prevSlideMessage: '이전 슬라이드',
          //nextSlideMessage: '다음 슬라이드',
          firstSlideMessage: '첫번째 슬라이드',
          lastSlideMessage: '마지막 슬라이드',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      });

      //new3 슬라이더

      var mySwiper2 = new Swiper('.new3.swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        centeredSlides: true,

        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        }
      });
    });
  });
});