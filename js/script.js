var swiper = new Swiper('.mySwiper', {
  slidesPerView: 'auto',
  grabCursor: true,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  speed: 1000,
 
});

function scrollToAnchor(anchorName) {
  var targetElement = document.querySelector('#' + anchorName);

  if (targetElement) {
      targetElement.scrollIntoView({
          behavior: 'smooth'
      });
  }
}