window.addEventListener("scroll", function() {
    const revealElemant = document.querySelectorAll(".reveal")
    revealElemant.forEach(function (el) {
      const { top, bottom } = el.getBoundingClientRect()
  
      if (bottom < 0 || top > window.innerHeight) {
        el.classList.add("reveal_active")
      } else {
        el.classList.add("reveal_active")
      }
    })
  })  