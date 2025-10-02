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


var icons = document.getElementsByClassName("silicon-faq-accordion-icon");
for (var i = 0; i < icons.length; i++) {
  icons[i].addEventListener("click", function(event) {
    // Hitta närmaste accordion-knapp
    var accordionBtn = this.closest(".accordion");
    if (accordionBtn) {
      accordionBtn.classList.toggle("active");
      var panel = accordionBtn.nextElementSibling;
      if (panel) {
        panel.classList.toggle("open");
      }
    }
    event.stopPropagation(); // Hindra att klicket bubblar upp
  });
}