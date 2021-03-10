const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,
  loopedSlides: 1,
  slidesPerView: 1,
  effect: "coverflow",

  // Navigation arrows
  navigation: {
    nextEl: ".slider-button_next",
    prevEl: ".slider-button_prev",
  },
  keyboard: {
    enabled: true,
  },
});
