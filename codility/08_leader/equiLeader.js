// 100%
function solution(A) {
  var len = A.length
  var candidates = {}
  var max = 0
  var candidate

  for (var i = 0; i < len; i++) {
    candidates[A[i]] = candidates[A[i]] ? candidates[A[i]]+1 : 1

    if (candidates[A[i]] > max) {
      max = candidates[A[i]]
      candidate = A[i]
    }
  }

  var sums = {}
  var countLeft = 0
  var countRight = 0

  for (var i = 0; i < len-1; i++) {
    if (A[i] === candidate) countLeft++

    sums[i] = sums[i] || { prev: 0, next: 0}
    sums[i].prev = countLeft

    var j = len-i-2
    if (A[j+1] === candidate) countRight++

    sums[j] = sums[j] || { prev: 0, next: 0}
    sums[j].next = countRight
  }

  var eqLeaderCount = 0

  for (var k in sums) {
    k = +k
    if (sums[k].prev / (k+1) > 0.5 && sums[k].next / (len-k-1) > 0.5) {
      eqLeaderCount++
    }
  }

  return eqLeaderCount
}

module.exports = solution
