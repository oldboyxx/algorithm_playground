// 62%
function solution(A, B, K) {
  var divCount = 0

  for (var i = A; i <= B; i++) {
    if (i % K === 0) divCount++
  }

  return divCount
}

module.exports = solution
