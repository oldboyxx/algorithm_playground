function solution(N) {
  var height = 1
  for (var i = 1; i <= N; i++) {
    i % 2 ? height *= 2 : height++
  }
  console.log(height)
}

module.exports = solution
