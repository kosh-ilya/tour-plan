const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,
  loopedSlides: 1,
  slidesPerView: 1,
  effect: "coverflow",

  // Navigation arrows
  navigation: {
    nextEl: ".slider-button__next",
    prevEl: ".slider-button__prev",
  },
  keyboard: {
    enabled: true,
  },
});
