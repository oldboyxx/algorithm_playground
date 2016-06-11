function solution(N) {
  var x = Math.pow((1 + Math.sqrt(5)) / 2, N)
  var y = Math.pow(-2 / (1 + Math.sqrt(5)), N)
  return Math.round((x - y) / Math.sqrt(5))
}

module.exports = solution
