// It is always helpful to use comments in your code!
var navLabels = document.getElementsByClassName("wrapper");
var dropdowns = document.getElementsByClassName("sub-menu");

function toggleDropdown() {
    this.children[1].classList.toggle("show");
}

for(i=0; i < navLabels.length; i++) {
    navLabels[i].addEventListener("mouseenter", toggleDropdown);
    navLabels[i].addEventListener("mouseleave", toggleDropdown);
}