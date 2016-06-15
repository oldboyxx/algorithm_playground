// 100%
function solution(A, B) {
  var len = A.length
  if (!len) return 0
  var count = 1
  var last = 0

  for (var i = 1; i < len; i++) {
    if (A[i] > B[last]) {
      count++
      last = i
    }
  }

  return count
}

module.exports = solution
