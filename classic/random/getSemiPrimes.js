function solution(N) {
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

      if (primes[i] && primes[j]) {
        semiPrimes[j*i] = true
      } else {
        semiPrimes[j*i] = false
      }
    }
  }

  var result = []
  for (i = 2; i <= N; i++) {
    if (semiPrimes[i]) result.push(i)
  }

  return result
}

module.exports = solution
