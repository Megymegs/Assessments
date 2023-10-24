let activeSlide = 0;
let dotsNav;
let isDragging = false;
let timeoutId = 3000;

const initializeSlider = () => {
  const slideHolder = document.querySelector(".logo-slider");
  const slider = slideHolder.querySelector('.slider-holder');
  let leftArrow = slideHolder.querySelector('.prev');
  let rightArrow = slideHolder.querySelector('.next');

  const calculateSlidesPerView = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1024) {
      return 4;
    } else if (screenWidth >= 768) {
      return 3;
    } else {
      return 2;
    }
  };

  const setActiveSlide = () => {
    const slides = Array.from(slider.children);
    slides.forEach((slide, index) => {
      if (index === activeSlide) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });
  };

  leftArrow.addEventListener("click", () => {
    slider.scrollLeft -= slider.firstElementChild.offsetWidth;
    clearTimeout(timeoutId);
    autoPlay();
  });

  rightArrow.addEventListener("click", () => {
    slider.scrollLeft += slider.firstElementChild.offsetWidth;
    clearTimeout(timeoutId);
    autoPlay();
  });

  const setActiveDot = () => {
    dotsNav.forEach((dot, index) => {
      if (index === activeSlide) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  };

  const createDots = () => {
    const slides = Array.from(slider.children);
    const dotContainer = slideHolder.querySelector('.dot-holder');
    dotsNav = [];
    slides.forEach(() => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      dotContainer.appendChild(dot);
      dotsNav.push(dot);
    });
    setActiveDot();
  };

  createDots();

  const sliderChildren = Array.from(slider.children);

  slider.insertAdjacentHTML("beforeend", slider.firstElementChild.outerHTML);
  slider.insertAdjacentHTML("afterbegin", sliderChildren[sliderChildren.length - 2].outerHTML);

  slider.scrollLeft = slider.firstElementChild.offsetWidth;

  const autoPlay = () => {
    const firstSlideWidth = slider.firstElementChild.offsetWidth;
    const scrollDistance = firstSlideWidth;
    slider.scrollLeft += scrollDistance;
    activeSlide++;
    if (activeSlide >= sliderChildren.length) {
      activeSlide = 0;
    } else if (activeSlide >= 11) {
      slider.scrollLeft = firstSlideWidth;
      activeSlide = 0;
    }
    setActiveSlide();
    setActiveDot();
  };

  slider.addEventListener("scroll", () => {
    const slideWidth = slider.firstElementChild.offsetWidth;
    activeSlide = Math.floor((slider.scrollLeft + slideWidth / 2) / slideWidth);
    if (activeSlide >= sliderChildren.length) {
      slider.scrollLeft = slideWidth;
      activeSlide = 0;
    }
    setActiveSlide();
    setActiveDot();
    clearTimeout(timeoutId);
    autoPlay();
  });

  slideHolder.addEventListener("mouseenter", () => {
    clearTimeout(timeoutId);
  });

  slideHolder.addEventListener("mouseleave", () => {
    autoPlay();
  });

  setActiveSlide();
  setActiveDot();
  autoPlay();
};
const manipulateDOM = () => {
  initializeSlider();
};
window.addEventListener("DOMContentLoaded", () => {
  manipulateDOM();
});
