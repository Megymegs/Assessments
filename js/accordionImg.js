document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.querySelectorAll(".accordion-button");
    buttons.forEach(function(button) {
      button.addEventListener("click", function() {
        if (this.getAttribute("aria-expanded")) {
          const currentTab = this.getAttribute("aria-controls");
          console.log(currentTab);
          const overlayImage = document.querySelector(".accordion-img img");
          
          switch (currentTab) {
            case "collapseOne":
              overlayImage.src = "/index.html/assets/backgrounds/Lender-Accordion-eVault.png";
              break;
            case "collapseTwo":
              overlayImage.src = "/index.html/assets/backgrounds/Title-Escrow.png";
              break;
            case "collapseThree":
              overlayImage.src = "/index.html/assets/backgrounds/Scheduling.png";
              break;
            case "collapseFour":
              overlayImage.src = "/index.html/assets/backgrounds/Notary-signing-Agents.png";
              break;
            default:
              break;
          }
        }
      });
    });
  });
  