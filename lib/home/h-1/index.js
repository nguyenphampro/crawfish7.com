const homeSlider = new Swiper('.cfh-home-1 .swiper-container',{
	slidesPerView: 1,
	navigation: {
		nextEl: '.cfh-home-1 .swiper-next',
		prevEl: '.cfh-home-1 .swiper-prev'
	},
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	  },
	speed: 1000,
	loop: true
})