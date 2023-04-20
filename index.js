/* Burgermenu (Emilie)*/
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

function openDropdown() {
  let dropdownContent = document.querySelector(".dropdown-content");
  if (dropdownContent.style.display === "none") {
      dropdownContent.style.display = "block";
  } else{
      dropdownContent.style.display = "none";
  }
}

/* Menubar web (Emilie) */
function openMenuDropdown() {
  let dropdownContent = document.querySelector(".menudropdown-content");
  if (dropdownContent.style.display === "none") {
      dropdownContent.style.display = "block";
  } else{
      dropdownContent.style.display = "none";
  }
}

// Galleri (Emilie)
let slideShow = 0;
kørSlide();

function kørSlide() {
let i;
let slides = document.getElementsByClassName("billedeslide");
let prikker = document.getElementsByClassName("prik");
for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
}
slideShow++;
if (slideShow > slides.length) {slideShow = 1}
for (i = 0; i < prikker.length; i++) {
  prikker[i].className = prikker[i].className.replace(" active", "");
}
slides[slideShow-1].style.display = "block";
prikker[slideShow-1].className += " active";
setTimeout(kørSlide, 4000); // skift ved 4 sek
}

function changeColor(element, color) {
element.style.backgroundColor = color;
}
// galleri slut

// karrusel (Emilie)
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// karrusel slut

