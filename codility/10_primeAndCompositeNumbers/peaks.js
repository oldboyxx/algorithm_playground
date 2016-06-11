// 100%
function solution(A) {
  var len = A.length
  var result = 0

  for (var d = 2; d <= len; d++) {
    if (len % d !== 0) continue;
    var peaksCount = 0

    for (var i = 0; i < len; i += d) {
      rangePeakFound = false

      for (var j = i; j < i+d; j++) {

        if (A[j] > A[j-1] && A[j] > A[j+1]) {
          rangePeakFound = true
          peaksCount++
          break;
        }
      }

      if (!rangePeakFound) {
        peaksCount = 0
        break;
      }
    }

    if (peaksCount === len/d) {
      result = len/d
      break;
    }
  }

  return result
}

module.exports = solution
