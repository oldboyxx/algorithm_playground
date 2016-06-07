// 100%
function solution(A) {
  var len = A.length
  if (len < 3) return 0

  A.sort((a, b) => a - b)

  for (var i = 0; i < len-2; i++) {
    if (A[i] + A[i+1] > A[i+2]) return 1
  }

  return 0
}

module.exports = solution
