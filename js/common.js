$(document).ready(function(){
	// mobile menu js
	$('.menu-trigger').click(function() {
		$('.nav').slideToggle();
		$(this).parent().toggleClass('active-menu');
		return false;
	});

	// IE9 placeholder code
	$('[placeholder]').each(function() {  
		var input = $(this);
					
		$(input).focus(function(){
			if (input.val() == input.attr('placeholder')) {
			   input.val('').removeClass("placeholder");
			}
		});
			
		$(input).blur(function(){
		   if (input.val() == '' || input.val() == input.attr('placeholder')) {
			   input.val(input.attr('placeholder')).addClass("placeholder");
		   }
		});
	}).blur();
});

// Flexslider
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    directionNav: false,
    pauseOnAction: true,    
    slideshow: true,
    keyboard: true,
    useCSS:true,
    touch: true,
    manualControls: ".flex-control-nav li",
    after: function(slider) {
    /* auto-restart player if paused after action */
    if (!slider.playing) {
      slider.play();
    }
  }
  });

});

    



