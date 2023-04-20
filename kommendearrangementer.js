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

  // pop-up starter (Emilie)

const popOutButton = document.getElementById("button"); 
const bg_container = document.querySelector("bgpopContainer");
const exitPopUp = document.getElementById("bg_container");

popOutButton.addEventListener("click", popOutNow);
document.addEventListener("mouseout", exitPage);

function popOutNow(e) {
    e.preventDefault();
    document.querySelector(".bgpopContainer").style.display = "flex";
    document.querySelector(".pop-box").style.display = "block";
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