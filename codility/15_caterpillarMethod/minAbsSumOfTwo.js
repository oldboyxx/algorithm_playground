// 100%
function solution(A) {
  var len = A.length
  var pos = []
  var neg = []
  var min = Infinity

  for (var i = 0; i < len; i++) {
    A[i] >= 0 ? pos.push(A[i]) : neg.push(A[i])
  }

  pos.sort((a, b) => a - b)
  neg.sort((a, b) => b - a)

  if (pos[0] === 0) return 0
  if (pos.length) min = pos[0]*2
  if (neg.length) min = Math.min(min, Math.abs(neg[0]*2))
  if (!neg.length || !pos.length) return min

  for (var i = 0; i < neg.length; i++) {
    var start = 0
    var end = pos.length-1
    var currNeg = neg[i]

    while (start <= end) {
      var mid = Math.floor((start+end)/2)
      var currPos = pos[mid]
      min = Math.min(min, Math.abs(currNeg+currPos))

      if (end === start) break;
      if (Math.abs(currNeg) <= currPos) {
        end = mid
      } else {
        start = mid + 1
      }
    }

    if (!min) return 0
  }

  return min
}

module.exports = solution
