$(document).ready(function () {
  if (document.querySelector(".js-dir-services-slider")) {
    const servicesSlider = new Swiper(".js-dir-services-slider", {
      slidesPerView: "auto",
      spaceBetween: 12,
      navigation: {
        prevEl: ".js-dir-services-slider-prev",
        nextEl: ".js-dir-services-slider-next",
      },
      breakpoints: {
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

  // Функция для выравнивания высоты элементов в рамках одного ряда    // Функция для выравнивания высоты элементов
  function alignHeights(selector) {
    let maxHeight = 0;

    // Сначала сбрасываем высоту, чтобы получить реальную высоту содержимого
    $(selector).css("height", "auto");

    // Находим максимальную высоту
    $(selector).each(function () {
      const height = $(this).outerHeight();
      if (height > maxHeight) {
        maxHeight = height;
      }
    });

    // Устанавливаем максимальную высоту для всех элементов
    $(selector).css("height", maxHeight);
  }

  // Выравниваем заголовки
  alignHeights(".js-tech-slide-title"); // замените на ваш класс заголовков
  // Выравниваем подзаголовки
  alignHeights(".js-tech-slide-subtitle"); // замените на ваш класс подзаголовков
  // Выравниваем описания
  alignHeights(".js-tech-slide-desc"); // замените на ваш класс описаний

  if (document.querySelector(".js-ins-companies-slider")) {
    const servicesSlider = new Swiper(".js-ins-companies-slider", {
      slidesPerView: "auto",
      spaceBetween: 24,
      loop: true,
      speed: 800,
      breakpoints: {
        1024: {
          spaceBetween: 50,
        },
      },
    });
  }
});
