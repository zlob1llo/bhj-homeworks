const dropdownLists = document.querySelectorAll(".dropdown__item");
const btnDropdown = document.getElementsByClassName("dropdown__value")[0];
const menuDropdown = document.getElementsByClassName("dropdown__list")[0];

btnDropdown.addEventListener("click", () => {
  menuDropdown.classList.toggle("dropdown__list_active")
})

dropdownLists.forEach((item, index) => {
  item.onclick = (event) => {
    event.preventDefault()
    btnDropdown.textContent = dropdownLists[index].textContent
    menuDropdown.classList.toggle("dropdown__list_active")
  }
})