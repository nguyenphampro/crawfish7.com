const homeGallery = new Swiper('.cfh-home-4 .swiper-container',{
	slidesPerView: 3,
	spaceBetween: 30,
	breakpoints: {
		992: {
			slidesPerView: 2
		},
		568: {
			slidesPerView: 1
		}
	},
	pagination: {
		el: '.cfh-home-4 .swiper-pagination',
		clickable: true,
	},
})