$(document).ready(function () {
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

    // Navigation arrows
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },
    keyboard: {
      enabled: true,
    },
  });

  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    console.log("клик по кнопке меню");
    document
      .querySelector(".navbar-bottom")
      .classList.toggle("navbar-bottom--visible");
  });

  var modalButton = $("[data-toggle = modal]");
  var closeModalButton = $(".modal__close");

  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");

    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  $(this).keydown(function (eventObject) {
    if (eventObject.which == 27) $(".modal").hide();
  });
  //обработка формы
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "Enter the full name",
        },
        email: {
          required: "Please specify your email",
          email: "Use format main@mail.ru",
        },
        phone: {
          required: "Please specify your phone",
          minlength: "Enter the full number",
        },
        news: {
          required: "Please specify your email",
          email: "Use format main@mail.ru",
        },
      },
    });
  });
  $(".input-mask").mask("+7 (000) 000-00-00");

  AOS.init({
    disable: "mobile",
  });
});
