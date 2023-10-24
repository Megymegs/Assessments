"use strict";

if (checkURL(currentPageURL, text)) {
  var manipulateDOM = function manipulateDOM() {
    initializeSlider();
  };

  currentPageURL = window.location.href;
  text = "assessment_1";
  window.addEventListener("DOMContentLoaded", function () {
    manipulateDOM();
  });
}