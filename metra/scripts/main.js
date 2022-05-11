$(document).ready(function(){
	// Mobile menu
	$(".header-menu-switcher").click(function(){
		$(".header-dropdown").addClass("open");
	});
	$(".header-dropdown-close__btn").click(function(){
		$(".header-dropdown").removeClass("open");
	});

	// Change  header on scroll
	$(window).scroll(function(){
	    if ($(window).scrollTop() >= 10) {
	       $('.header').addClass('header_fixed');
	    }
	    else {
	       $('.header').removeClass('header_fixed');
	    }
	});

	// Custom scroll
	if($('.scroll').length > 0){
		$(".scroll").niceScroll({
			autohidemode:false,
			cursorwidth: 9,
			cursorborderradius :'5px',
			railpadding:{top:0,right:0,left:0,bottom:0},
			cursoropacitymin:1,
			cursorcolor:'#20B7DC',
			cursorborder : "1px solid #fff",
			//enablemousewheel:false,
		});
	}

	// Mainslider
	if($('.mainslider').length > 0){
		$('.mainslider').slick({
			//autoplay: true,
			//infinite: false,
			arrows: true,
			dots: true,
			slidesToShow: 1,
			accessibility: false,
			autoplaySpeed: 3000,
			//centerMode: true,
			//variableWidth: true,
			//asNavFor:'',
			//appendDots:
			responsive: [
			{
				breakpoint: 768,
				settings: {
					adaptiveHeight: true
				}
			}]
		});
	}

	// Products carousel
	if($('.products-carousel').length > 0){
		$('.products-carousel').slick({
			//autoplay: true,
			//infinite: false,
			arrows: false,
			dots: false,
			slidesToShow: 4,
			accessibility: false,
			autoplaySpeed: 3000,
			//centerMode: true,
			//variableWidth: true,
			//asNavFor:'',
			//appendDots:
			responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 111,
				settings: {
					slidesToShow:1,
				}
			}]
		});
	}

	// Products mobile carousel
	$('.products-mobile-carousel').slick({
		accessibility: false,
		autoplaySpeed: 3000,
		infinite: false,
	    speed: 300,
	    dots: true,
	    arrows: false,
	    slidesToShow: 1,
	    slidesToScroll: 1,
        mobileFirst: true,
        responsive: [
        {
            breakpoint: 576,
            settings: 'unslick'
        }]
	});

	// Product slider
	$('.product-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		arrows: false,
		fade: true,
		asNavFor: '.product-thumbs',
		responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: true
			}
		},
		{
			breakpoint: 576,
			settings: {
				arrows: false
			}
		}]
	});
	$('.product-thumbs').slick({
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		vertical: true,
		asNavFor: '.product-slider',
		arrows: true,
		dots: false,
		focusOnSelect: true,
		// centerMode: true,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				vertical: false,
			}
		},
		{
			breakpoint: 576,
			settings: {
				arrows: false,
				vertical: false,
				slidesToShow: 3,
			}
		}]
	});

	// Product tabs mobile
	$(".product-tabs-section__caption").click(function(){
		$(this).parents().siblings(".product-tabs-section").removeClass("active_mobile");
		$(this).parents(".product-tabs-section").toggleClass("active_mobile");
		$(".scroll").getNiceScroll().resize();
	});

	// Product tabs 
	$(function() {
		$('.product-tabs-list').each(function() {
			$(this).find('.product-tabs__btn').each(function(i) {
				$(this).click(function(){
					$(this).addClass('active').siblings().removeClass('active').closest('.product-tabs').find('.product-tabs-section').removeClass('active').eq(i).addClass('active');
					$(".scroll").getNiceScroll().resize();
				});
			});
		});
	})

	// Change quantity
	$('.product-table-quantity__btn').click(function(event) {
		var n=parseInt($(this).parent().find('.product-table-quantity__value input').val());
		if($(this).hasClass('btn-minus')){
			n=n-1;
			if(n<1){n=1;}
		}else{
			n=n+1;
		}
		$(this).parent().find('.product-table-quantity__value input').val(n);
		return false;
	});

	// Fancybox
	if($('.fancybox').length > 0){
		$(".fancybox").fancybox({
			loop : false,
			arrows : true,
			buttons : [
				'thumbs',
				'close'
			],
		});
	}

	// Phone mask
	$(".input_phone").inputmask("+7 (999) 999 99 99");

	// Modal product
	$(".js-btn-product").on("click", function(event){
	  event.preventDefault();
	  $.fancybox.open({
	    src  : "#modal-product",
	    closeExisting: true,
	    baseClass: "dark__bg",
	    touch: false,
	    transitionEffect: "circular",
	  });
	});
	$(".js-btn-product-success").on("click", function(event){
	  event.preventDefault();
	  $.fancybox.open({
	    src  : "#modal-product-success",
	    closeExisting: true,
	    baseClass: "dark__bg",
	    touch: false,
	    transitionEffect: "circular",
	  });
	});
}); 