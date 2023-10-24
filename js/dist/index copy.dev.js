"use strict";

var activeSlide = 0;
var dotsNav;
var isDragging = false;
var timeoutId;

var initializeSlider = function initializeSlider() {
  var slideHolder = document.querySelector(".logo-slider");
  var slider = slideHolder.querySelector('.slider-holder');
  var leftArrow = slideHolder.querySelector('.prev');
  var rightArrow = slideHolder.querySelector('.next');

  var calculateSlidesPerView = function calculateSlidesPerView() {
    var screenWidth = window.innerWidth;

    if (screenWidth >= 1024) {
      return 4;
    } else {
      return 1;
    }
  };

  var setActiveSlide = function setActiveSlide() {
    var slides = Array.from(slider.children);
    slides.forEach(function (slide, index) {
      if (index === activeSlide) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });
  };

  leftArrow.addEventListener("click", function () {
    slider.scrollLeft -= slider.firstElementChild.offsetWidth;
    clearTimeout(timeoutId);
    autoPlay();
  });
  rightArrow.addEventListener("click", function () {
    slider.scrollLeft += slider.firstElementChild.offsetWidth;
    clearTimeout(timeoutId);
    autoPlay();
  });

  var setActiveDot = function setActiveDot() {
    dotsNav.forEach(function (dot, index) {
      if (index === activeSlide) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  };

  var createDots = function createDots() {
    var slides = Array.from(slider.children);
    var dotContainer = slideHolder.querySelector('.dot-holder');
    dotsNav = [];
    slides.forEach(function () {
      var dot = document.createElement('div');
      dot.classList.add('dot');
      dotContainer.appendChild(dot);
      dotsNav.push(dot);
    });
    setActiveDot();
  };

  createDots();

  var updateSlidesPerView = function updateSlidesPerView() {
    slidesPerView = calculateSlidesPerView();
    var slideWidth = slider.offsetWidth / slidesPerView;
    var slides = Array.from(slider.children);
    slides.forEach(function (slide) {
      slide.style.width = slideWidth + "px";
    });

    if (!isDragging) {
      slider.scrollLeft = slidesPerView * slideWidth - slideWidth;
    }
  };

  var slidesPerView = calculateSlidesPerView();
  window.addEventListener("resize", function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(updateSlidesPerView, 200);
  });
  var sliderChildren = Array.from(slider.children);
  sliderChildren.slice(-1, slidesPerView).reverse().forEach(function (slide) {
    slider.insertAdjacentHTML("afterbegin", slide.outerHTML);
  });
  sliderChildren.slice(1, slidesPerView).forEach(function (slide) {
    slider.insertAdjacentHTML("beforeend", slide.outerHTML);
  });
  slider.scrollLeft = slider.firstElementChild;
  slider.scrollLeft = slider.firstElementChild.offsetWidth;

  var autoPlay = function autoPlay() {
    var firstSlideWidth = slider.firstElementChild.offsetWidth;
    var scrollDistance = firstSlideWidth;
    timeoutId = setTimeout(function () {
      slider.scrollLeft += scrollDistance;
    }, 5000);
  };

  slider.addEventListener("scroll", function () {
    var slideWidth = slider.firstElementChild.offsetWidth;
    activeSlide = Math.floor(slider.scrollLeft / slideWidth);
    setActiveSlide();
    setActiveDot();
    clearTimeout(timeoutId);
    autoPlay();
  });
  slideHolder.addEventListener("mouseenter", function () {
    clearTimeout(timeoutId);
  });
  slideHolder.addEventListener("mouseleave", function () {
    autoPlay();
  });
  setActiveSlide();
  setActiveDot();
  autoPlay();
};

var manipulateDOM = function manipulateDOM() {
  initializeSlider();
};

window.addEventListener("DOMContentLoaded", function () {
  timeoutId = setTimeout(manipulateDOM, 5000);
});