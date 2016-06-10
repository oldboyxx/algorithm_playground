// 100%
function solution(S, P, Q) {
  S = S.split('')
  var Slen = S.length
  var Qlen = P.length
  var factors = ['A', 'C', 'G', 'T']
  var sums = {}
  var results = []

  for (var i = Slen-1; i >= 0; i--) {
    sums[i] = {}

    factors.forEach(f => {
      var next = i === Slen-1 ? 0 : sums[i+1][f]
      sums[i][f] = S[i] === f ? next+1 : next
    })
  }

  for (var i = 0; i < Qlen; i++) {
    var start = P[i]
    var end = Q[i]+1
    var hasA = sums[start].A - (sums[end] ? sums[end].A : 0)
    var hasC = sums[start].C - (sums[end] ? sums[end].C : 0)
    var hasG = sums[start].G - (sums[end] ? sums[end].G : 0)

    if (hasA) {
      results.push(1)
    } else if (hasC) {
      results.push(2)
    } else if (hasG) {
      results.push(3)
    } else {
      results.push(4)
    }
  }

  return results
}

module.exports = solution
