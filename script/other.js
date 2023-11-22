const fullScreenBtn = document.getElementById('full-screen-btn')
const body = document.querySelector('body')

fullScreenBtn.addEventListener('click', (e) => {
  e.preventDefault()
  if (document.fullscreenElement !== null) {
    document.exitFullscreen()
  } else {
    body.requestFullscreen()
  }
})
