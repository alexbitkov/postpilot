document.addEventListener("DOMContentLoaded", function () {
  // Получаем элемент плавающего меню с классом "navigation-menu"
  const floatingMenu = document.querySelector(".navigation-menu");

  // Получаем высоту плавающего меню
  const floatingMenuHeight = floatingMenu.offsetHeight;

  // Применяем высоту плавающего меню к стилю header
  const header = document.querySelector(".header-inner");
  header.style.paddingTop = `${floatingMenuHeight}px`;
});

const introductionSwiperTitles = document.querySelectorAll(
  ".introduction__swiper-slide__title"
);
const introductionSwiperSubtitles = document.querySelectorAll(
  ".introduction__swiper-slide__subtitle"
);
const introductionSwiperSlides = document.querySelectorAll(
  ".introduction__swiper-slide"
);

let activeIndex = null;

for (let i = 0; i < introductionSwiperTitles.length; i++) {
  introductionSwiperSlides[i].addEventListener("mouseenter", () => {
    if (i == 0 || i == 1 || i == 3) {
      introductionSwiperSubtitles[2].classList.remove(
        "introduction__swiper-slide__subtitle--open"
      );
      introductionSwiperTitles[2].classList.remove(
        "introduction__swiper-slide__title--open"
      );
    }
    if (activeIndex !== null && activeIndex !== i) {
      introductionSwiperSubtitles[activeIndex].classList.remove(
        "introduction__swiper-slide__subtitle--open"
      );
      introductionSwiperTitles[activeIndex].classList.remove(
        "introduction__swiper-slide__title--open"
      );
    }
    introductionSwiperSubtitles[i].classList.add(
      "introduction__swiper-slide__subtitle--open"
    );
    introductionSwiperTitles[i].classList.add(
      "introduction__swiper-slide__title--open"
    );
    activeIndex = i;
  });
}

var reviewsSwiper = new Swiper(".reviews__swiper", {
  breakpoints: {
    375: {
      slidesPerView: 2,
      centeredSlides: true,
      spaceBetween: 15,
      grabCursor: true,
    },
    // when window width is >= 1150px
    1150: {
      slidesPerView: 2,
      spaceBetween: 30,
      grabCursor: true,
    },
  },
});

var sponsorsSwiper = new Swiper(".sponsors__swiper", {
  slidesPerView: 1,
  spaceBetween: 125,
  pagination: {
    el: ".sponsors-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      var logoImages = [
        "img/obvi-swiper.svg",
        "img/bulletproof-swiper.svg",
        "img/boom-swiper.svg",
        "img/orbit-baby-swiper.svg",
      ];
      return (
        '<div class="' +
        className +
        '">' +
        '<img src="' +
        logoImages[index] +
        '" alt="logo image"></div>'
      );
    },
  },
});

const navMenuListDropped1 = document.querySelectorAll(
  ".navigation-menu__list-dropped-1"
);
const navMenuListDropped2 = document.querySelectorAll(
  ".navigation-menu__list-dropped-2"
);
const navMenuListItemDrop1 = document.querySelectorAll(
  ".navigation-menu__list-item-drop-1"
);
const navMenuListItemDrop2 = document.querySelectorAll(
  ".navigation-menu__list-item-drop-2"
);

navMenuListItemDrop1[0].addEventListener("mouseenter", () => {
  navMenuListDropped1[0].classList.add("navigation-menu__list-dropped--open-1");
});

navMenuListItemDrop2[0].addEventListener("mouseenter", () => {
  navMenuListDropped2[0].classList.add("navigation-menu__list-dropped--open-2");
});
navMenuListItemDrop1[0].addEventListener("mouseleave", () => {
  navMenuListDropped1[0].classList.remove(
    "navigation-menu__list-dropped--open-1"
  );
});

navMenuListItemDrop2[0].addEventListener("mouseleave", () => {
  navMenuListDropped2[0].classList.remove(
    "navigation-menu__list-dropped--open-2"
  );
});

navMenuListItemDrop1[1].addEventListener("mouseenter", () => {
  navMenuListDropped1[1].classList.add("navigation-menu__list-dropped--open-1");
});

navMenuListItemDrop2[1].addEventListener("mouseenter", () => {
  navMenuListDropped2[1].classList.add("navigation-menu__list-dropped--open-2");
});
navMenuListItemDrop1[1].addEventListener("mouseleave", () => {
  navMenuListDropped1[1].classList.remove(
    "navigation-menu__list-dropped--open-1"
  );
});

navMenuListItemDrop2[1].addEventListener("mouseleave", () => {
  navMenuListDropped2[1].classList.remove(
    "navigation-menu__list-dropped--open-2"
  );
});

const menuBtn = document.querySelector(".menu-btn");
const menuMobile = document.querySelector(".menu-mobile");

menuBtn.addEventListener("click", () => {
  menuMobile.classList.toggle("menu-mobile--open");
});
