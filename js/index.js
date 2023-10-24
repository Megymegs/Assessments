document.addEventListener("DOMContentLoaded", function() {
  let currentPageURL = window.location.href;
  let text;
  console.log(currentPageURL);
  
  function checkURL(currentPageURL, text) {  
    currentPageURL = window.location.href;
    text = "404";
    console.log(currentPageURL);
    if (currentPageURL.includes(text)) {
      setTimeout(() => {
        console.log(currentPageURL);
        window.location.href = "/Assessments/"
        return true;
      }, 6800);
    }
  }
});
