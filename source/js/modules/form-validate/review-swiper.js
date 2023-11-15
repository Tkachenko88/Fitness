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
  });
};
