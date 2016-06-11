function primeFactors(N) {
  var primeFactors = {}
  var notDone = 1 < N

  while (notDone) {
    var P = 2
    var base = Math.sqrt(N)

    if (N % P) {
      P = 3
      while (N % P && P < base) P += 2
    }

    P = P > base ? N : P
    primeFactors[P] = P

    notDone = P !== N
    N = N / P
  }

  return primeFactors
}

module.exports = solution
