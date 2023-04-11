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