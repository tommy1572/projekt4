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

    //kontaktform starter her (Johanna)

    select_element = document.getElementById("semSelect");
    let sem = ["1. semester", "2. semester", "3. semester", "4. semester", "5. semester", "6. semester"];


    // Udvider option-boks baseret på antal semestre i array'et
    for (let i=0; i < sem.length; i++) {
    let opt = sem[i];
    select_element.innerHTML += "<option value=\" "+ opt +"\">"+ opt + "</option";
    }

    document.getElementById("semSelect").onchange = function(){
    if (document.getElementById("semSelect").value == '1. semester')
    location.replace('mineopl.html');
    else if (document.getElementById("semSelect").value == '2. semester')
    location.replace('mineopl.html');
    else if (document.getElementById("semSelect").value == '3. semester')
    location.replace('mineopl.html');
    else if (document.getElementById("semSelect").value == '4. semester')
    location.replace('mineopl.html');
    else if (document.getElementById("semSelect").value == '5. semester')
    location.replace('mineopl.html');
    else if (document.getElementById("semSelect").value == '6. semester')
    location.replace('mineopl.html');
    else
    location.replace('mineopl.html')
    }
    document.getElementById("semSelect").selectedIndex = 1;

  //kontaktform starter her