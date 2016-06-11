// 100%
function solution(A) {
  var len = A.length
  var peaks = []

  for (var i = 0; i < len; i++) {
    if (A[i] > A[i-1] && A[i] > A[i+1]) {
      peaks.push(i)
    }
  }

  var pLen = peaks.length
  if (!pLen) return 0
  var limit = Math.floor(Math.sqrt(len)) + 1

  for (var k = limit; k >= 1; k--) {
    var flagsCount = 1
    var lastFlag = 0

    for (var p = 1; p < pLen; p++) {

      if (peaks[p] - peaks[lastFlag] >= k) {
        lastFlag = p
        flagsCount++
      }
    }

    if (flagsCount >= k) return k
  }

  return 0
}

module.exports = solution
