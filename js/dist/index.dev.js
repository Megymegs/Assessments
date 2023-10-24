"use strict";

var currentPageURL = window.location.href;
var text;

function checkURL(currentPageURL, text) {
  currentPageURL = window.location.href;
  text = "404";

  if (currentPageURL.includes(text)) {
    setTimeout(function () {
      console.log(currentPageURL);
      window.location.href = "/index.html/";
      return true;
    }, 6800);
  }
}