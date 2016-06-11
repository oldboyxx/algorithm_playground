// 100%
function solution(N) {
  var A = 1
  var minPerim = Infinity

  while (A * A <= N) {
    if (N % A === 0) {
      var B = N / A
      minPerim = Math.min(minPerim, 2*(A+B))
    }

    A++
  }

  return minPerim
}

module.exports = solution
