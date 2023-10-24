let currentPageURL = window.location.href;
let text;

const manipulateDOM = () => {
  function checkURL(currentPageURL, text) {  
    currentPageURL = window.location.href;
    text = "404";
    if (currentPageURL.includes(text)) {
      setTimeout(() => {
        console.log(currentPageURL);
        window.location.href = "/Assessments/"
        return true;
      }, 6800);
    }
  }
};

window.addEventListener("DOMContentLoaded", () => {
  manipulateDOM();
});
