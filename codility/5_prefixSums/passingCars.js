// 100%
function solution(A) {
  var len = A.length
  var pairs = 0
  var westCount = 0

  for (var i = len-1; i >= 0; i--) {
    A[i] ? westCount++ : pairs += westCount
    if (pairs > 1000000000) return -1
  }

  return pairs
}

module.exports = solution
