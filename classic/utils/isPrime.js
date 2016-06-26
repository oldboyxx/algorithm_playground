function solution(N) {
  var i = 2

  while (i * i <= N) {
    if (N % i == 0) return false
    i += 1
  }

  return true
}

module.exports = solution
