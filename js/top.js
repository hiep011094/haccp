$(document).ready(function(){
	$(window).bind(('load'),function(){
		
		//...................slider.......................
		$('.c-slider01').slick({
			slidesToShow: 3,
			slidesToScroll: 3,
			autoplay: true,
			arrows:true,
			dots: false,
			responsive: [				
				{
				  breakpoint: 769,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				  }
				}
			  ]
		});
		AOS.init({
			once: true
		});
		
	});

});