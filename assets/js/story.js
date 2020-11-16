$(document).ready(function () {
    console.log(document.querySelector('path').getTotalLength());

    var timer;
    
    $(window).on('scroll', function () {

        var scrollT = $(this).scrollTop();

        clearTimeout(timer);
        timer = setTimeout(function () {
            $('.fade').each(function () {
                if (scrollT > $(this).offset().top - 300) $(this).addClass('on');
            });
            //page2만 네비 색상 바꾸기
                if (scrollT > $(this).offset().top - 360) {
                    $('#header').addClass('bg_change');
                } else {
                    $('#header').removeClass('bg_change');
                }
            });

        //blue line
        if(scrollT > $('.storybox').offset().top - 350){
           console.log('123');
           $('.blue_line path').addClass('on');
        }  

    });
});