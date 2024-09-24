const d = document.getElementById("dead"),
  l = document.getElementById("lost")
for (let e = 1; e <= 9; e++) {
  function getHole(t) {
    return document.getElementById(`hole${t}`)
  }
  let t = getHole(e)
  t.onclick = function () {
    !0 === t.className.includes("hole_has-mole")
      ? ++d.textContent
      : ++l.textContent,
      "10" === d.textContent
        ? (alert("Вы победили!"), (d.textContent = 0), (l.textContent = 0))
        : "5" === l.textContent &&
          (alert("Вы проиграли"), (d.textContent = 0), (l.textContent = 0))
  }
}