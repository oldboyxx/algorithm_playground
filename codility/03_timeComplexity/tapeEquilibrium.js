// 100%
function solution(A) {
  var len = A.length,
      sums = {},
      result = Infinity

  for (var i = 1; i < len; i++) {

    sums[i] = sums[i] || { prev: 0, next: 0}
    sums[i].prev = sums[i-1] ? sums[i-1].prev + A[i-1] : A[i-1]

    var j = len-i

    sums[j] = sums[j] || { prev: 0, next: 0}
    sums[j].next = sums[j+1] ? sums[j+1].next + A[j] : A[j]
  }

  for (var key in sums) {
    var abs = Math.abs(sums[key].prev - sums[key].next)
    result = abs < result ? abs : result
  }

  return result
}

module.exports = solution
