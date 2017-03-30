$(function() {
//CHECK WIDTH - NUM ITEMS
	if($(window).width() > 1024){
		$("#ingred_slider").owlCarousel({
			items: 3,
			nav: true,
			navText: ['<img src="../img/prev-slide.svg">', '<img src="../img/next-slide.svg"/>'],
			dots: true,
			dotsEach: true
		});
	}else if($(window).width() <= 1024 && $(window).width() >= 768){
		$("#ingred_slider").owlCarousel({
			items: 2,
			nav: true,
			navText: ['<img src="../img/prev-slide.svg">', '<img src="../img/next-slide.svg"/>'],
			dots: true,
			dotsEach: true
		});
	}else if($(window).width() < 768){
		$("#ingred_slider").owlCarousel({
			items: 1,
			nav: true,
			navText: ['<img src="../img/prev-slide.svg">', '<img src="../img/next-slide.svg"/>'],
			dots: true,
			dotsEach: true
		});
	}
//END of CHECK WIDTH - NUM ITEMS
	$("#video-carousel").owlCarousel({
		items: 1,
		nav: true,
		navText: ['<img src="../img/prev-slide.svg">', '<img src="../img/next-slide.svg"/>'],
		dots: true,
		dotsEach: true
	});
//HOVER PLAY-BTN
	$('.play-btn').mousedown(function(){
		$(this).css({
			'transform': 'scale(.9)'
		})
	}).mouseup(function(){
		$(this).css({
			'transform': 'none'
		})
	});
//END of HOVER PLAY-BTN
//FAQ SLIDE
	$('.faq-list .caption').click(function(){
		$(this).toggleClass('active').next().slideToggle();
	});
//END of FAQ SLIDE
//HOVER INGREDIENT
	(function(){
		var sb;
		$('.slide-item').hover(function(){
			sb = $(this).find('.slide-box');
			// var hi = $(this).height();
			// var hb = $(this).find('.slide-box').height();
			// of = hb - hi;
			//console.log('height item: ' + hi + ' || height box: ' + hb + ' || offset: ' + of);
			$(sb).css({
				'transform': 'translateY(-' + 250 + 'px)'
			});
		}, function(){
			$(sb).css({
				'transform': 'translateY(0)'
			});
		});
	}());
//END of HOVER INGREDIENT
});
