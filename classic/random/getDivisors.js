function solution(N) {
  var divisors = []
  var limit = Math.floor(Math.sqrt(N))

  for (var i = 1; i <= limit; i++) {
    if (N % i === 0) {
      divisors.push(i)
      if (N / i !== i) divisors.push(N / i)
    }
  }

  divisors.sort((a, b) => a - b)
  return divisors
}

module.exports = solution
