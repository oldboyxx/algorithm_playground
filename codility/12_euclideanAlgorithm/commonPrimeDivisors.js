// 92%
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

function solution(A, B) {
  var len = A.length
  var count = 0

  for (var i = 0; i < len; i++) {
    var fA = primeFactors(A[i])
    var fB = primeFactors(B[i])
    if (JSON.stringify(fA) === JSON.stringify(fB)) count++
  }

  return count
}

module.exports = solution
