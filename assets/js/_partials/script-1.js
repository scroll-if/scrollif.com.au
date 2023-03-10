$(window).scroll(function() {
    function elementScrolled(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height() / 1.3;
        var elemTop = $(elem).offset().top;
        return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
    }
    if (elementScrolled('div.back-to-top-button')) {
        $('div.back-to-top-button').addClass("visible");
    }