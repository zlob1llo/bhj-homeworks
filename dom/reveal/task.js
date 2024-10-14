const revealElemant = document.querySelectorAll(".reveal")
window.addEventListener("scroll", function (el) {
  revealElemant.forEach(function (el) {
    el.classList.remove("reveal_active")
    const { top, bottom } = el.getBoundingClientRect()
    if (top < window.innerHeight) {
      el.classList.add("reveal_active")
    } else {
      el.classList.remove("reveal_active")
    }
  })
})