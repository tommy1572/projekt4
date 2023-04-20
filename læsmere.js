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

  /*hjerte START (Tommy)*/
function increaseCount() {
    var countElement = document.getElementById("count");
    var count = parseInt(countElement.innerText);
    countElement.innerText = count + 1;
    document.querySelector('.heart-btn').style.color = 'red';
  }
  /*hjerte SLUT*/
  
  /*læs mere karrusel START (Tommy) */
  var billedeIndex = 1;
  visKarrusel(billedeIndex);
  
  function plusKarrusel(n) {
    visKarrusel(billedeIndex += n);
  }
  
  function visKarrusel(n) {
    var i;
    var karrusel = document.getElementsByClassName("minBilleder");
    if (n > karrusel.length) {billedeIndex = 1}
    if (n < 1) {billedeIndex = karrusel.length}
    for (i = 0; i < karrusel.length; i++) {
      karrusel[i].style.display = "none";
    }
    karrusel[billedeIndex-1].style.display = "block";
  }
  
  /*læs mere karrusel SLUT */