document.querySelectorAll(".postit").forEach((postit) => {
  postit.addEventListener("animationend", function () {
    postit.style.animation = "none"
  })
})
