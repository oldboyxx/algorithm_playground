// 62%
function solution(S, P, Q) {
  var M = P.length
  S = S.split('')

  var factors = { 'A': 1, 'C': 2, 'G': 3, 'T': 4 }
  result = []

  for (var i = 0; i < M; i++) {
    var start = P[i]
    var end = Q[i]
    var found = []

    for (var j = start; j <= end; j++) {
      if (!found[S[j]]) found[S[j]] = factors[S[j]]
      if (found['A']) break;
    }

    var min = 4
    for (var key in found) {
      if (found[key] < min) min = found[key]
    }

    result.push(min)
  }

  return result
}

module.exports = solution
