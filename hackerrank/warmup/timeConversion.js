function solution(time) {

  if (/PM/.test(time)) {
    time = time.replace('PM', '')
    var hours = time.slice(0, 2)
    if (hours !== '12') hours = (parseInt(hours) + 12).toString()
    console.log(hours+time.slice(2))

  } else {
    time = time.replace('AM', '')
    var hours = time.slice(0, 2)
    if (hours === '12') hours = '00'
    console.log(hours+time.slice(2))
  }
}

module.exports = solution
