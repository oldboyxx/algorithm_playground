// 100%
function solution(A) {
  var len = A.length
  if (len < 3) return 0
  A.sort((a, b) => a - b)
  var count = 0

  for (var i = 0; i < len-2; i++) {
    for (var j = i+1; j < len-1; j++) {
      for (var k = j+1; k < len; k++) {
        if (A[i] + A[j] > A[k]) {
          count++
        } else {
          break;
        }
      }
    }
  }

  return count
}

module.exports = solution
