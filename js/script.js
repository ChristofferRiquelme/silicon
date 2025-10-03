var icons = document.getElementsByClassName("silicon-faq-accordion-icon");
for (var i = 0; i < icons.length; i++) {
  icons[i].addEventListener("click", function(event) {
    var accordionBtn = this.closest(".silicon-faq-accordion");
    var panel = accordionBtn.nextElementSibling;

    // Om redan öppen: stäng den
    var isOpen = accordionBtn.classList.contains("active");
    if (isOpen) {
      accordionBtn.classList.remove("active");
      if (panel) panel.classList.remove("open");
    } else {
      // Stäng alla andra
      var allAccordions = document.getElementsByClassName("silicon-faq-accordion");
      var allPanels = document.getElementsByClassName("silicon-faq-accordion-panel");
      for (var j = 0; j < allAccordions.length; j++) {
        allAccordions[j].classList.remove("active");
      }
      for (var k = 0; k < allPanels.length; k++) {
        allPanels[k].classList.remove("open");
      }
      // Öppna den du klickade på
      accordionBtn.classList.add("active");
      if (panel) panel.classList.add("open");
    }
    event.stopPropagation();
  });
}