(function ($) {
    $(function () {

        $('.sidenav').sidenav();
        $('.parallax').parallax();
        $('.carousel').carousel();
        $('.carousel.carousel-slider').carousel({
            fullWidth: true,
            indicators: true
        });
        // move next carousel
        $('.moveNextCarousel').click(function (e) {
            e.preventDefault();
            e.stopPropagation();
            $('.carousel').carousel('next');
        });

        // move prev carousel
        $('.movePrevCarousel').click(function (e) {
            e.preventDefault();
            e.stopPropagation();
            $('.carousel').carousel('prev');
        });

        $('.collapsible').collapsible();

    }); // end of document ready
})(jQuery); // end of jQuery name space
