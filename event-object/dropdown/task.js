const dropdownLists = document.querySelectorAll(".dropdown__item");
const btnDropdown = document.getElementsByClassName("dropdown__value")[0];
const menuDropdown = document.getElementsByClassName("dropdown__list")[0];


 
btnDropdown.addEventListener ("click", () => {
    menuDropdown.classList.toggle("dropdown__list_active")
})


// let i = 0

dropdownLists[0].addEventListener("click", function () {
    btnDropdown.textContent = dropdownLists[0].textContent
    menuDropdown.classList.toggle("dropdown__list_active")
  })
  
dropdownLists[1].addEventListener("click", function () {
    btnDropdown.textContent = dropdownLists[1].textContent
    menuDropdown.classList.toggle("dropdown__list_active")
  })
  
dropdownLists[2].addEventListener("click", function () {
    btnDropdown.textContent = dropdownLists[2].textContent
    menuDropdown.classList.toggle("dropdown__list_active")
  })
dropdownLists[3].addEventListener("click", function () {
    btnDropdown.textContent = dropdownLists[3].textContent
    menuDropdown.classList.toggle("dropdown__list_active")
  })
  