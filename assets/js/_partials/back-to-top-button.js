$(window).scroll(function(){
    var ScrollTop = parseInt($(window).scrollTop());
    
    if (ScrollTop > window.innerHeight) {
        $('a.back-to-top-trigger').addClass("visible");
    }
    else {
        $('a.back-to-top-trigger').removeClass("visible");
    }
});