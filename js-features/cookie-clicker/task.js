cookie.onclick = function () {
    const t = document.getElementById("cookie"),
      e = document.getElementById("clicker__counter")
    ++e.textContent,
      e.textContent % 2 != 0
        ? ((t.width = 300), (t.heigth = 300))
        : ((t.width = 200), (t.heigth = 200))
  }
  