// 100%
function solution(N, P, Q) {
  var i = 0
  var primes = []
  var semiPrimes = []

  for (i = 2; i < N; i++) {
    primes[i] = true
    semiPrimes[i] = false
  }

  for (i = 2; i <= parseInt(Math.sqrt(N)); i++) {
    for (var j = i; j * i <= N; j++) {
      primes[j*i] = false
      semiPrimes[j*i] = primes[i] && primes[j] ? true : false
    }
  }

  var sums = [0, 0]
  var count = 0
  for (i = 2; i <= N; i++) {
    sums.push(semiPrimes[i] ? ++count : count)
  }

  var result = []
  for (i = 0; i < Q.length; i++) {
    result.push(sums[Q[i]] - sums[P[i]-1])
  }

  return result
}

module.exports = solution
