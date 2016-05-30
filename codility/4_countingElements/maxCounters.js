// 88%
function slowerSolution(N, A) {
  var counters = []
  var max = 0
  for (var i = 0; i < N; i++) counters.push(0)

  A.forEach(x => {

    if (x >= 1 && x <= N) {
      counters[x-1]++
      if (max < counters[x-1]) max = counters[x-1]

    } else if (x === N + 1) {
      for (var i = 0; i < N; i++) counters[i] = max
    }
  })

  return counters
}

// 100%
function solution(N, A) {
    var counters = []
    var min = 0, max = 0
    for (var i = 0; i < N; i++) counters.push(0)

    A.forEach(x => {

      if (x >= 1 && x <= N) {
        counters[x-1] = Math.max(counters[x-1], min)
        max = Math.max(++counters[x-1], max)

      } else {
        min = max
      }
    })

    counters.forEach((val, i) => {
      counters[i] = Math.max(val, min)
    })

    return counters
}

module.exports = solution
