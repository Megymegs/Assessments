"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

var buttons = document.querySelectorAll("button");
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (!this.getAttribute("aria-expanded")) {
      var currentTab = this.getAttribute("aria-controls");
      console.log(currentTab);
      var overlayImage = document.querySelector(".accordion-img img").getAttribute("src");
      console.log(overlayImage);

      switch (currentTab) {
        case "collapseOne":
          overlayImage = (_readOnlyError("overlayImage"), "/assets/backgrounds/Lender-Accordion-eVault.png");
          console.log(overlayImage);
          break;

        case "collapseTwo":
          overlayImage = (_readOnlyError("overlayImage"), "/assets/backgrounds/Title-Escrow.png");
          break;

        case "collapseThree":
          overlayImage = (_readOnlyError("overlayImage"), "/assets/backgrounds/Scheduling.png");
          break;

        case "collapseFour":
          overlayImage = (_readOnlyError("overlayImage"), "/assets/backgrounds/Notary-signing-Agents.png");
          break;

        default:
          break;
      }
    }
  });
});