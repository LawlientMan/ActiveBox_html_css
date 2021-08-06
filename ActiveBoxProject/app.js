$(function(){
	let nav = $("#nav");
	let navToggle = $("#navToggle");

	//fixed header
	let header = $("#header"); 
	let intro = $("#intro");
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();

	checkScroll(scrollPos,introH);

	$(window).on("scroll resize", function() {
		introH = intro.innerHeight();
		scrollPos = $(this).scrollTop();
		checkScroll(scrollPos, introH);
	})

	function checkScroll(scrollPos, introH){
		if(scrollPos > introH){
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}

	//smoose scroll
	$("[data-scroll]").on("click", function(event){
		event.preventDefault();
		let blockId = $(this).data('scroll');
		if (blockId) {
			let blockOffset = $(blockId).offset().top;

			$("html, body").animate({
				scrollTop: blockOffset - 70
			}, 500);
		}
		closeNav();
	});

	// Nav toggle
	navToggle.on("click", function(event){
		event.preventDefault();
		nav.toggleClass("show");
	});

	function closeNav(){
		nav.removeClass("show");
	}

	//reviews

	let slider = $("#reviewsSlider");
	slider.slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1, 
		fade: true,
		arrows: false,
		dots: true
	  });
});