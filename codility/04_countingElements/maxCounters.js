// 100%
function solution(N, A) {
  var len = A.length
  var max = 0, min = 0
  var counters = []
  for (var c = 0; c < N; c++) counters.push(0)

  for (var i = 0; i < len; i++) {

    if (A[i] <= N) {
      var target = A[i]-1
      counters[target] = Math.max(counters[target], min)
      max = Math.max(max, ++counters[target])

    } else {
      min = max
    }
  }

  for (var j = 0; j < N; j++) {
    counters[j] = Math.max(counters[j], min)
  }

  return counters
}

module.exports = solution
