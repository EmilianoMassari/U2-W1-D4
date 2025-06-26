const parole = document.querySelectorAll(".parole i")
let idx = 0

function mostraProssimaParola() {
  parole.forEach((el, i) => el.classList.remove("attiva"))
  parole[idx].classList.add("attiva")
  idx = (idx + 1) % parole.length
}

mostraProssimaParola()
setInterval(mostraProssimaParola, 2200)
