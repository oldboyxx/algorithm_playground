// 91%
function solution(A) {
  var len = A.length
  if (len === 1) return 0

  for (var i = 0; i < len; i++) {
    var count = 1

    for (var j = i+1; j < len; j++) {
      if (A[i] === A[j]) {
        count++
        if (count / len > 0.5) return i
      }
    }
  }

  return -1
}

// 100%
function solution(A) {
  var len = A.length
  if (len === 0) return -1

  var candidate
  var candidateIndex
  var candidateDiff

  for (var i = 0; i < len; i++) {
    if (!candidateDiff) {
      candidate = A[i]
      candidateIndex = i
      candidateDiff = 1
    } else {
      if (A[i] === candidate) {
        candidateDiff++
      } else {
        candidateDiff--
      }
    }
  }

  var candidateCount = 0
  for (var i = 0; i < len; i++) {
    if (A[i] === candidate) candidateCount++
  }

  return candidateCount / len > 0.5 ? candidateIndex : -1
}

module.exports = solution
