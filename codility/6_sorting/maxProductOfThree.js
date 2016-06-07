// 100%
function solution(A) {
  var len = A.length
  A.sort((a, b) => a - b)

  return Math.max(
    A[0] * A[1] * A[len-1],
    A[len-1] * A[len-2] * A[len-3]
  )
}

module.exports = solution
