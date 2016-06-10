// 100%
function solution(A) {
  var len = A.length
  A.sort((a, b) => a - b)

  for (var i = 0; i < len; i++) {
    if (A[i] !== i+1) return 0
  }

  return 1
}

module.exports = solution
