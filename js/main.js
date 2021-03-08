const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,
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
