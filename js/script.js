$(document).ready(function () {
    $('#menu a, #logo').click(function (e) {
        e.preventDefault();
        $('html').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500);
    });

    $(document).on('scroll', function () {
        if ($(window).scrollTop() === 0) {
            $('.header').removeClass('fixed');
        }
        else {
            $('.header').addClass('fixed');
        }
    });
});
