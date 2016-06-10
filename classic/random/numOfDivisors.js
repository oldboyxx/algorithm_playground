function solution(N) {
  var i = 1
  var count = 0

  while (i * i < N) {
    if (N % i == 0) count += 2
    i += 1
  }

  if (i * i == N) count++
  return count
}

module.exports = solution
