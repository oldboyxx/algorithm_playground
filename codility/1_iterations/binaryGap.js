// 100%
function solution(N) {
  var binary = (N >>> 0).toString(2)
  var regex = /1(0+)(?=1)/g
  var matches
  var gaps = []

  while (matches = regex.exec(binary)) {
    gaps.push(matches[1])
  }

  return gaps.length ? Math.max.apply(null, gaps.map(str => str.length)) : 0
}

// 100%
function solution2(N) {
  var binary = (N >>> 0).toString(2)
  var gap = 0
  var gaps = []
  var oneDetected = false

  binary.split('').forEach(val => {
    if (val === '0') {
      if (oneDetected) gap++
    } else {
      if (gap) gaps.push(gap)
      gap = 0
      oneDetected = true
    }
  })

  return gaps.length ? Math.max.apply(null, gaps) : 0
}

module.exports = solution
