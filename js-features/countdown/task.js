const time = setInterval(function () {
    const t = document.getElementById("timer")
    --t.textContent,
      t.textContent <= 0 &&
        (clearInterval(time), alert("Вы победили в конкурсе!"))
  }, 1e3)
  