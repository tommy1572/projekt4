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
