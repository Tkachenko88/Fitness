export const initReviewSlider = () => {
  const swiperWrapper = document.querySelector('[review-swiper]');
  const buttonPrev = document.querySelector('[review-swiper-btn-prev]');
  const buttonNext = document.querySelector('[review-swiper-btn-next]');

  return new window.Swiper(swiperWrapper, {
    slidesPerView: 1,
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      1366: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
    },
  });
};
