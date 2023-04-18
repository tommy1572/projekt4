/* Burgermenu */
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

/* Menubar web */
  function openMenuDropdown() {
    let dropdownContent = document.querySelector(".menudropdown-content");
    if (dropdownContent.style.display === "none") {
        dropdownContent.style.display = "block";
    } else{
        dropdownContent.style.display = "none";
    }
  }

  // Galleri
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

// karrusel
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

// pop-up starter
const popOutButton = document.getElementById("button"); 
const bg_container = document.querySelector("bgpopContainer");
const exitPopUp = document.getElementById("bg_container");

popOutButton.addEventListener("click", popOutNow);
document.addEventListener("mouseout", exitPage);

function popOutNow(e) {
    e.preventDefault();
    document.querySelector(".bgpopContainer").style.display = "flex";
}

const cancelPop = document.getElementById("close");

cancelPop.addEventListener("click", cancelPopOut)

function cancelPopOut(e) {
    e.preventDefault();
    document.querySelector(".bgpopContainer").style.display = "none";
}

function exitPage(event) {
    if (event.clientY < 50) {
        document.removeEventListener("mouseout", exitPage);
        exitPopUp.style.display = "flex";
    }
}
// pop-up slut

  //timer starter her

  var timers = [
    [new Date("April 30, 2023 15:37:25").getTime(), 'Timer1'],
    [new Date("May 31, 2023 15:37:25").getTime(), 'Timer2'],
    [new Date("April 30, 2023 15:37:25").getTime(), 'Timer3'],
    [new Date("May 31, 2023 15:37:25").getTime(), 'Timer4']
    ];
  var x = setInterval(function () {
    timers.forEach(function (element) {
        var now = new Date().getTime();
        var distance = element[0] - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById(element[1]).innerHTML = ' <p id="days" class="float_left">' + days + '<br><span>DAGE</span></p> <p id="hours" class="float_left">' + hours + '<br><span>TIMER</span></p> <p id="minutes" class="float_left">' + minutes + '<br><span>MINUTTER</span></p> <p id="seconds" class="float_left">' + seconds + '<br><span>SEKUNDER</span></p>';
        if (distance < 0) {
            clearInterval(x);
            document.getElementById(element[1]).innerHTML = "EXPIRED";
        }
    });
  });
  
  //timer slutter her

//kontakt form starter her

select_element = document.getElementById("semester");
let sprog = ["1. semester", "2. semester", "3. semester", "4. semester", "5. semester", "6. semester"];

  // Udvider option-boks baseret på antal sprog i array'et
  for (let i=0; i < sprog.length; i++) {
    let opt = sprog[i];
    select_element.innerHTML += "<option value=\" "+ opt +"\">"+ opt + "</option";
    }
  
    document.getElementById("semester").onchange = function(){
    if (document.getElementById("semester").value == ' semester')
    location.replace('index.html');
    else if (document.getElementById("semester").value == ' semester')
    location.replace('indexEn.html');
    else
    location.replace('indexDe.html')
    }
    document.getElementById("semester").selectedIndex = 1;

//kontakt form slutter her
