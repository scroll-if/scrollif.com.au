$(window).scroll(function(){
    var ScrollTop = parseInt($(window).scrollTop());
    
    if (ScrollTop > window.innerHeight) {
        $('div.back-to-top-button').addClass("visible");
    }
    else {
        $('div.back-to-top-button').removeClass("visible");
    }
});