const swiper = new Swiper(".projects-slider", {
  slidesPerView: 3,
  spaceBetween: 30,

  direction: getDirection(),
  autoHeight: false,

  navigation: {
    nextEl: ".projects-button-next",
    prevEl: ".projects-button-prev",
    hiddenClass: ".projects-button-prev",
    disabledClass: ".projects-button-next",
  },
  on: {
    resize: function () {
      swiper.changeDirection(getDirection());
    },
  },

  keyboard: {
    enabled: true,
  },
  breakpoints: {
    350: {
      spaceBetween: 30,
    },
    319: {
      slidesPerView: 4,
      height: 1700,
      spaceBetween: 15,
    },
  },
});
function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = windowWidth <= 350 ? "vertical" : "horizontal";

  return direction;
}
const reviews = new Swiper(".reviews-slider", {
  // Optional parameters
  slidesPerView: 2,
  spaceBetween: 30,

  navigation: {
    nextEl: ".reviews-button-prev ",
    prevEl: ".reviews-button-next ",
  },
  breakpoints: {
    992: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1,
    },
  },
});

var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function () {
  console.log("клик по кнопке меню");
  document.querySelector(".nav-menu").classList.toggle("nav-menu--visible");
});
$(this).keydown(function (eventObject) {
  if (eventObject.which == 27) $(".modal").hide();
});
//обработка формы
$(".form").each(function () {
  $(this).validate({
    errorClass: "invalid",
    messages: {
      name: {
        required: "Введите свое имя ",
        minlength: "Введите не менее 2 букв",
      },
      email: {
        required: "Введите свой email",
        email: "Введите формат name@domain.com",
      },
      phone: {
        required: "Введите свой телефон",
        minlength: "Введите не менее 11 символов",
      },
      news: {
        required: "Please specify your email",
        email: "Your email address must be in the format of name@domain.com",
      },
    },
  });
});
$(".input-mask").mask("+7 (000) 000-00-00");

document.getElementById("send").addEventListener("click", function () {
  document.querySelector(".modal").classList.toggle("modal_active");
  document.querySelector("body").classList.toggle("body_active");
});
document.getElementById("close-modal").addEventListener("click", function () {
  document.querySelector(".modal").classList.toggle("modal_active");
  document.querySelector("body").classList.toggle("body_active");
});

window.addEventListener("click", function (e) {
  if (e.target == document.querySelector(".modal_active")) {
    document.querySelector(".modal").classList.toggle("modal_active");
    document.querySelector("body").classList.toggle("body_active");
  }
});
document.getElementById("send-mail").addEventListener("click", function () {
  document.querySelector(".modal").classList.toggle("modal_active");
  document.querySelector("body").classList.toggle("body_active");
});
document.getElementById("close").addEventListener("click", function () {
  document.querySelector(".modal").classList.toggle("modal_active");
  document.querySelector("body").classList.toggle("body_active");
});

window.addEventListener("click", function (e) {
  if (e.target == document.querySelector(".modal_active")) {
    document.querySelector(".modal").classList.toggle("modal_active");
    document.querySelector("body").classList.toggle("body_active");
  }
});
document.getElementById("send-mobile").addEventListener("click", function () {
  document.querySelector(".modal").classList.toggle("modal_active");
  document.querySelector("body").classList.toggle("body_active");
});
document.getElementById("close-mobile").addEventListener("click", function () {
  document.querySelector(".modal").classList.toggle("modal_active");
  document.querySelector("body").classList.toggle("body_active");
});

window.addEventListener("click", function (e) {
  if (e.target == document.querySelector(".modal_active")) {
    document.querySelector(".modal").classList.toggle("modal_active");
    document.querySelector("body").classList.toggle("body_active");
  }
});
$("a.scroll-to").on("click", function (e) {
  e.preventDefault();
  var anchor = $(this).attr("href");
  $("html, body")
    .stop()
    .animate(
      {
        scrollTop: $(anchor).offset().top - 60,
      },
      800
    );
});
