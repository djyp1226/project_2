$(document).ready(function () {
    console.log(document.querySelector('path').getTotalLength());

    var scrollT = $(this).scrollTop();

    $(window).on('scroll', function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
            scrollT = $(this).scrollTop();

            $('.fade').each(function () {
                if (scrollT > $(this).offset().top - 300) $(this).addClass('on');
            });

            $(window).trigger('scroll');

            //page2만 네비 색상 바꾸기
            $(window).scroll(function () {
                var scrollT = $(this).scrollTop();
                if (scrollT > 50) {
                    $('#header').addClass('bg_change');
                } else {
                    $('#header').removeClass('bg_change');
                }
            });
        });

    });
    
});