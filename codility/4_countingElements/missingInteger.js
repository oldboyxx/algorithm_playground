// 100%
function solution(A) {
  A = A.filter(n => n > 0)
  A.sort((a, b) => a - b)

  var next = 0
  var len = A.length
  if (!len) return 1

  for (var i = 0; i < len; i++) {
    if (next !== A[i]) next++
    if (next !== A[i]) return next
  }

  return A[len-1] + 1
}

module.exports = solution
