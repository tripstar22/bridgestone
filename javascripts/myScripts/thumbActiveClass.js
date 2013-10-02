$(function(){

    //Switches active class in nav
	$(".thumbs li").on("click", function() {
		$(".thumbs li").removeClass("activeThumb");
		$(this).addClass("activeThumb");
		event.preventDefault();
	});

});