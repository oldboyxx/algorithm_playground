// 100%
function solution(A) {
  var len = A.length
  var sums = [A[0]]
  for (var s = 1; s < len; s++) sums[s] = -Infinity

  for (var i = 1; i < len; i++) {
    for (var j = Math.max(0, i-6); j < i; j++) {
      sums[i] = Math.max(sums[i], sums[j] + A[i])
    }
  }

  return sums[sums.length-1]
}

module.exports = solution
