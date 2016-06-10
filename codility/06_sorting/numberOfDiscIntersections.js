// 81%
function solution(A) {
  var len = A.length
  var pairsCount = 0

  for (var i = 0; i < len; i++) {
    for (var j = i+1; j < len; j++) {
      if (i + A[i] >= j - A[j]) {
        pairsCount++
      }
    }
    if (pairsCount > 10000000) return -1
  }

  return pairsCount
}

// 100% - NEED TO REWRITE
function solution(A) {
  var len = A.length
  var pairs = 0
  var starts = []
  var ends = []

  for (var i = 0; i < len; i++) {
    starts[i] = 0
    ends[i] = 0
  }

  for (var i = 0; i < len; i++) {
    starts[Math.max(0, i - A[i])]++
    if (i < len - A[i]) ends[i + A[i]]++
  }

  var active = 0
  for (var i = 0; i < len; i++) {

    if (starts[i] > 0) {
      pairs += active * starts[i]
      pairs += starts[i] * (starts[i] - 1) / 2
      active += starts[i]
      if (pairs > 10000000) return -1
    }

    active -= ends[i]
  }

  return pairs
}


module.exports = solution
