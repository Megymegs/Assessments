"use strict";

var activeSlide = 0;
var dotsNav;
var isDragging = false;
var timeoutId = 3000;

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
      return 2;
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
  var sliderChildren = Array.from(slider.children);
  slider.insertAdjacentHTML("beforeend", slider.firstElementChild.outerHTML);
  slider.insertAdjacentHTML("afterbegin", sliderChildren[sliderChildren.length - 2].outerHTML);
  slider.scrollLeft = slider.firstElementChild.offsetWidth;

  var autoPlay = function autoPlay() {
    var firstSlideWidth = slider.firstElementChild.offsetWidth;
    var scrollDistance = firstSlideWidth;
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

  slider.addEventListener("scroll", function () {
    var slideWidth = slider.firstElementChild.offsetWidth;
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
  manipulateDOM();
});