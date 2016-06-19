function solution(N) {
  for (var i = 1; i <= N; i++) {
    console.log(' '.repeat(N-i) + '#'.repeat(i))
  }
}

module.exports = solution
