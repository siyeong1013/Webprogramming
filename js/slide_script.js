const slides = document.querySelectorAll('.slide');

let curSlide = 0;
const maxSlide = slides.length;
const dotContainer=document.querySelector(".dots")
const slider = document.querySelector('.slide_banner');

const createDots = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};
createDots()
const activateDot = function (slide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};

const goToSlide = function (slide) {
  slides.forEach(

    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

// Next slide
const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  activateDot(curSlide)
  goToSlide(curSlide);
};

// Previous slide
const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  activateDot(curSlide);
  goToSlide(curSlide);
};

const init = function () {
  goToSlide(0);
  activateDot(0);

};
init();

dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
      console.log(e.target.dataset);
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
  }
});


setInterval(nextSlide, 4000);

