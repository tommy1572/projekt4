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
function myfunction() {
  document.getElementByClassName("menuMyDropdown").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches('.menudropbtn')) {
  var myDropdown = document.getElementByClassName("menuMyDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}