$(document).ready(function() {

	// var scroll = new scroller().init();

	// $(window).resize(function() {
	// 	scroll 
	// });
	// $(window).scroll(function(e) {
	// 	// store starting position
		
	// 	sticky = false;


	// 	// as it scrolls, if the top is >= top of original element

	// 	// if it is sticky and it hits top of starting position, remove
	// 	// stickiness
	// 	if(sticky && $(this).scrollTop() <= startingPosition.top ) {
	// 		sticky = false;
	// 		$el.removeClass("sticky");
	// 		console.log("no sticky");
	// 	} else if(!sticky &&  $(this).scrollTop() > $el.offset().top) {
	// 		sticky = true;
	// 		$el.addClass("sticky");
	// 		console.log("sticky");
	// 	}



	// });
});

var scroller = function() {
	var navItem,
	startingPosition,
	sticky;

	this.stickNav = function() {
		if(typeof navItem == "undefined") { navItem = $(".title-nav.1"); }
		if(typeof startingPosition == "undefined") { startingPosition = navItem.offset(); }
		
		$(window).scroll(function(e) {

			// if not sticky, check if scrollTop > starting Position
			if(!sticky && $(this).scrollTop() > startingPosition.top - 10) {
				sticky = true;
				navItem.addClass("sticky");
				console.log("became sticky");



			} else if(sticky && $(this).scrollTop() <= startingPosition.top - 10) {
				sticky = false;
				navItem.removeClass("sticky");
				console.log("not sticky");
			}



		});
	};

	this.highlightSpecificPage = function() {

		var highlighted = false;

		$(window).scroll(function(e) {
			if(!highlighted && navItem.offset().top >= $(".2-about").offset().top) {
				$(".about").addClass("on-page");
				highlighted = true;
			} else if(highlighted && navItem.offset().top < $(".2-about").offset().top) {
				$(".about").removeClass("on-page");
				highlighted = false;
			}
		});
	};

	this.initVariables = function() {
		navItem = $(".title-nav.1");
		startingPosition = navItem.offset();
	};

	this.init = function() {
		navItem = $(".title-nav.1");
		startingPosition = navItem.offset();
		sticky = false;

		$(window).resize(function() {
			this.initVariables();
		});

		this.stickNav();
		this.highlightSpecificPage();
		return this;
	};

};

