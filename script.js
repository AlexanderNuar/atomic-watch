const deg = 6

function myWatch(watch, hour, minutes, title) {
  const hr = document.querySelector(`#hr${watch}`)
  const mn = document.querySelector(`#mn${watch}`)
  const sc = document.querySelector(`#sc${watch}`)
  let city = document.querySelector(`#city${watch}`)

  city.innerHTML = title

  setInterval(() => {
    let day = new Date()
    let hh = day.getHours()
    let mm = day.getMinutes() * deg + minutes
    let ss = day.getSeconds() * deg

    if (mm >= 360) {
      mm = 0
    }

    hr.style.transform = `rotateZ(${(hh + hour) * 30 + mm / 12}deg)`
    mn.style.transform = `rotateZ(${mm}deg)`
    sc.style.transform = `rotateZ(${ss}deg)`
    city.innerHTML =
      title +
      ` ${
        hh + Math.floor(hour) < 10
          ? '0' + (hh + Math.floor(hour))
          : hh + Math.floor(hour)
      }:${mm / deg < 10 ? '0' + mm / deg : mm / deg}:${
        ss / deg < 10 ? '0' + ss / deg : ss / deg
      }`
  })
}

myWatch(1, 0, 0, 'Москва')
myWatch(2, 0, 0, 'Киев')
myWatch(3, -1, 0, 'Берлин')
myWatch(4, 6, 0, 'Токио')
myWatch(5, -7, 0, 'Вашингтон')
myWatch(6, 0.5, 180, 'Иран')
