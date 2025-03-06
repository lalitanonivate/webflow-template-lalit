/**
 * Script Purpose: Template Script
 * Author: Erlen Masson
 * Version: 1
 * Started: [Start Date]
 */

console.log("Script - v1");

// ------- Tootips ------- //
function setupTooltips() {
  tippy("[data-tippy-content]", {
    animation: "shift-away",
    duration: [300, 250],
    maxWidth: "250px",
    placement: "top",
    interactive: true,
    trigger: "mouseenter focus",
    hideOnClick: false,
    arrow: true,
    onShow(instance) {
      instance.popper.setAttribute("aria-hidden", "false");
    },
    onHide(instance) {
      instance.popper.setAttribute("aria-hidden", "true");
    },
  });
}

// ------- Initialize Functionality ------- //
function initCustomCode() {
  setupTooltips();
}

// Setup once the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", initCustomCode);
