const hourElem = document.getElementById('hour')
const minuteElem = document.getElementById('minute')
const secondElem = document.getElementById('second')

function padder(number) {
  return number < 10 ? '0' + number : number
}

function updateClock() {
  let date = new Date()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  hourElem.innerHTML = padder(hour)
  minuteElem.innerHTML = padder(minute)
  secondElem.innerHTML = padder(second)
}

updateClock()
setInterval(updateClock, 1000)