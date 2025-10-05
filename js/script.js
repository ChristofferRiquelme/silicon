document.getElementById('darkmode-switch').addEventListener('change', function() {
  if (this.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
});

const darkModeText = document.querySelector('.silicon-navbar-actions-darkmode-text');
const darkModeSwitch = document.getElementById('darkmode-switch');

darkModeSwitch.addEventListener('change', function() {
  if (this.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    darkModeText.textContent = 'Light Mode';
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    darkModeText.textContent = 'Dark Mode';
  }
});


var icons = document.getElementsByClassName("silicon-faq-accordion-icon");
for (var i = 0; i < icons.length; i++) {
  icons[i].addEventListener("click", function(event) {
    var accordionBtn = this.closest(".silicon-faq-accordion");
    var panel = accordionBtn.nextElementSibling;

    var isOpen = accordionBtn.classList.contains("active");
    if (isOpen) {
      accordionBtn.classList.remove("active");
      if (panel) panel.classList.remove("open");
    } else {

      var allAccordions = document.getElementsByClassName("silicon-faq-accordion");
      var allPanels = document.getElementsByClassName("silicon-faq-accordion-panel");
      for (var j = 0; j < allAccordions.length; j++) {
        allAccordions[j].classList.remove("active");
      }
      for (var k = 0; k < allPanels.length; k++) {
        allPanels[k].classList.remove("open");
      }

      accordionBtn.classList.add("active");
      if (panel) panel.classList.add("open");
    }
    event.stopPropagation();
  });
}