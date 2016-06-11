function solution(N) {
  var i, p = 1
  var range = []
  for (i = 0; i <= N; i++) range.push(true)

  while (p*p <= N) {
    if (!range[++p]) continue;
    for (i = p*p; i <= N; i += p) range[i] = false
  }

  var primes = []
  for (i = 2; i <= N; i++) {
    if (range[i]) primes.push(i)
  }

  return primes
}

module.exports = solution
