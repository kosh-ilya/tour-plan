const swiper = new Swiper(".manual-slider", {
  slidesPerView: 3,
  navigation: {
    nextEl: ".manual-button-prev",
    prevEl: ".manual-button-next",
  },
});
const reviewsSlider = new Swiper(".adapt-slider", {
  slidesPerView: 3,
  navigation: {
    nextEl: ".adapt-slider__button--next",
    prevEl: ".adapt-slider__button--prev",
  },
  keyboard: { enabled: true },
});
let answer = $('.faq-spoiler-answer__text');
 		question = $(".faq-spoiler-question");
 		minus = $('.minus');
 		plus = $('.plus');
		minus.hide();

$(".plus").click(function (e) {
	if($('.faq-spoiler-question').hasClass('one')){
			plus.not($(this)).removeClass('active');
			$('.faq-spoiler-answer__text').not($(this).next()).slideUp(300);
	}
	$(this).toggleClass('active').next().slideToggle(300);
  question.toggleClass("active");
});
