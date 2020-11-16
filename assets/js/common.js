$(document).ready(function () {
    //fade 
    var timer = 0;
    var scrollT = $(this).scrollTop();

    $(window).on('scroll', function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
          scrollT = $(this).scrollTop();
       
          $('.fade').each(function () {
            if (scrollT > $(this).offset().top - 300) $(this).addClass('on');
          });

        //네비 색상 바꾸기

        if (scrollT > 400){
            $('#header').addClass('bg_change');
        }else{
            $('#header').removeClass('bg_change');
        }

        }, 50);
    });

    //메뉴열기
    
    var $gnb = $('#gnb');

    $('.btn_menu').on('click', function () {
        if ($(this).hasClass('active')) {
            $gnb.stop().animate({
                right: '-18rem'
            }, 300, function () {
                $(this).css({
                        display: 'none'
                    })
                    .find('li.on').removeClass('on').children('ul').stop().slideup();
            });
            $(this).removeClass('active').find('blind-b').text('메뉴 열기');
        } else {
            var scrollMove = scrollT;
            $(this).addClass('active').find('blind-b').text('메뉴 닫기');
            $gnb.css({
                display: 'block'
            }).stop().animate({
                right: 0
            }, 300, function () {
                $first.focus(); //대상 엘리먼트에 포커스를 강제로 이동
            });
        }
        //처음과 마지막에서 #gnb 외부로 포커스가 나가지 않도록 제어
        var $first = $gnb.find('[data-link="first"]');
        var $last = $gnb.find('[data-link="last"]');
        //첫번째 a 태그에서 shift+tab을 눌러 header의 영역으로 포커스가 이동하지 못하게 제한
        $first.on('keydown', function (e) {
            console.log(e.keyCode); //tab을 클릭하면 9를 반환
            if (e.shiftKey && e.keyCode == 9) {
                e.preventDefault(); //포커스 이동을 강제로 제한
                $last.focus(); //처음 포커스로 이동, #gnbWrap을 벗어나지 않고 순환됨
            }
        });
        //마지막 버튼 태그에서 tab을 눌러 container의 영역으로 포커스가 이동하지 못하게 제한
        $last.on('keydown', function (e) {
            if (!e.shiftKey && e.keyCode == 9) {
                e.preventDefault();
                $('.btn_menu').focus();
            }
        });

        //클릭이벤트
        $gnb.find('ul>li>a').on('click', function () {
            if ($(this).next().length === 0) {
                location.href = $(this).attr("href");
            } else {
                $(this).parent().siblings().removeClass('on').find('ul').stop().slideUp("slow");
                $(this).next().stop().slideToggle("slow").parent().toggleClass('on');
            }
            return false;
        });
    });
});