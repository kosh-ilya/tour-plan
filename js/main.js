const hotelSlider = new Swiper(".hotel-slider", {
  // Optional parameters
  loop: true,
  loopedSlides: 1,
  slidesPerView: 1,

  // Navigation arrows
  navigation: {
    nextEl: ".hotel-slider__button_next",
    prevEl: ".hotel-slider__button_prev",
  },
  keyboard: {
    enabled: true,
  },
});
const reviewsSlider = new Swiper(".reviews-slider", {
  // Optional parameters
  loop: true,
  loopedSlides: 1,
  slidesPerView: 1,

  // Navigation arrows
  navigation: {
    nextEl: ".reviews-slider__button--next",
    prevEl: ".reviews-slider__button--prev",
  },
  keyboard: {
    enabled: true,
  },
});
