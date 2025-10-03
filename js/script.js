// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }




// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     panel.classList.toggle("open");
//   });
// }


// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     } 
//   });
// }

// var acc = document.getElementsByClassName("accordion");
// for (var i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     panel.classList.toggle("open");
//   });
// }


// var icons = document.getElementsByClassName("silicon-faq-accordion-icon");
// for (var i = 0; i < icons.length; i++) {
//   icons[i].addEventListener("click", function(event) {
//     // Hitta närmaste accordion-knapp
//     var accordionBtn = this.closest(".accordion");
//     if (accordionBtn) {
//       accordionBtn.classList.toggle("active");
//       var panel = accordionBtn.nextElementSibling;
//       if (panel) {
//         panel.classList.toggle("open");
//       }
//     }
//     event.stopPropagation(); // Hindra att klicket bubblar upp
//   });
// }



// var icons = document.getElementsByClassName("silicon-faq-accordion-icon");
// for (var i = 0; i < icons.length; i++) {
//   icons[i].addEventListener("click", function(event) {
//     // Stäng alla accordeons och paneler först
//     var allAccordions = document.getElementsByClassName("accordion");
//     var allPanels = document.getElementsByClassName("silicon-faq-accordion-panel");
//     for (var j = 0; j < allAccordions.length; j++) {
//       allAccordions[j].classList.remove("active");
//     }
//     for (var k = 0; k < allPanels.length; k++) {
//       allPanels[k].classList.remove("open");
//     }

//     // Öppna den du klickade på
//     var accordionBtn = this.closest(".accordion");
//     if (accordionBtn) {
//       accordionBtn.classList.add("active");
//       var panel = accordionBtn.nextElementSibling;
//       if (panel) {
//         panel.classList.add("open");
//       }
//     }
//     event.stopPropagation();
//   });
// }



var icons = document.getElementsByClassName("silicon-faq-accordion-icon");
for (var i = 0; i < icons.length; i++) {
  icons[i].addEventListener("click", function(event) {
    var accordionBtn = this.closest(".accordion");
    var panel = accordionBtn.nextElementSibling;

    // Om redan öppen: stäng den
    var isOpen = accordionBtn.classList.contains("active");
    if (isOpen) {
      accordionBtn.classList.remove("active");
      if (panel) panel.classList.remove("open");
    } else {
      // Stäng alla andra
      var allAccordions = document.getElementsByClassName("accordion");
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