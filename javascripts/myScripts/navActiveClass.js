$(function(){

    //Switches active class in nav
	$(".left li").on("click", function() {
		$(".left li").removeClass("active");
		$(this).addClass("active");
		event.preventDefault();
	});

});