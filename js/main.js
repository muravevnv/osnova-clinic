$(document).ready(function () {
  if (document.querySelector(".js-dir-services-slider")) {
    const servicesSlider = new Swiper(".js-dir-services-slider", {
      slidesPerView: 1.1,
      spaceBetween: 12,
      navigation: {
        prevEl: ".js-dir-services-slider-prev",
        nextEl: ".js-dir-services-slider-next",
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 8,
        },
      },
    });
  }

  if (document.querySelector(".js-dir-doctors-slider")) {
    const servicesSlider = new Swiper(".js-dir-doctors-slider", {
      slidesPerView: 1.1,
      spaceBetween: 12,

      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 8,
        },
      },
    });
  }

  if (document.querySelector(".js-dir-tech-slider")) {
    const servicesSlider = new Swiper(".js-dir-tech-slider", {
      slidesPerView: 1.15,
      spaceBetween: 8,
      navigation: {
        prevEl: ".js-dir-tech-slider-prev",
        nextEl: ".js-dir-tech-slider-next",
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 1,
        },
      },
    });
  }

  if (document.querySelector(".news__swiper")) {
    const doctorsSwiper = new Swiper(".news__swiper", {
      speed: 500,
      loop: false,
      spaceBetween: 8,
      loop: false,
      slidesPerView: "auto",
      autoHeight: false,
      navigation: {
        nextEl: ".news__slider-next",
        prevEl: ".news__slider-prev",
      },
    });
  }

  $(".js-show-more-btn").on("click", function () {
    $(this).parent().find(".js-show-more-text").toggleClass("is-open");
    $(this).toggleClass("is-active");
  });

  $(".js-acc-head").on("click", function () {
    $(this).parent().find(".js-acc-body").slideToggle();
    $(this).toggleClass("is-active");
  });
});
