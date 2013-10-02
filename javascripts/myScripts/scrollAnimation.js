$(function(){

    // Automatically scrolls to section after corresponding link is clicked
    $('.top-bar ul li a').bind('click', function(e) {
        e.preventDefault();
        $('html,body').animate({scrollTop: $(this.hash).offset().top});
    });

});