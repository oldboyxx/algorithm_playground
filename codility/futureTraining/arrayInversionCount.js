// 72%
function solution(A) {
  var len = A.length
  var count = 0

  for (var i = 0; i < len-1; i++) {
    for (var j = i+1; j < len; j++) {
      if (A[j] < A[i]) count++
    }
    if (count > 1000000000) return -1
  }

  return count
}

module.exports = solution
