

const sliderSwiper = new Swiper('.first-slider', {
    centeredSlides: true,
	slidesPerView: 1,
	loop: true,
	navigation: {
        nextEl: '.slider-btn--next',
        prevEl: '.slider-btn--prev',
    }
});

const sliderSwiper2 = new Swiper('.main-slider', {
    centeredSlides: true,
    slidesPerView: 3,
    loop: true,
    spaceBetween: 100,

});

