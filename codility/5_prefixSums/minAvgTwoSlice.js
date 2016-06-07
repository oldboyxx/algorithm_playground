// 100%
function solution(A) {
  var len = A.length
  var min = Infinity
  var minPos = 0

  for (var i = 0; i < len; i++) {

    if (typeof A[i+2] !== 'undefined') {
      var slice3 = (A[i] + A[i+1] + A[i+2]) / 3
      if (min > slice3) {
        minPos = i
        min = slice3
      }
    }

    if (typeof A[i+1] !== 'undefined') {
      var slice2 = (A[i] + A[i+1]) / 2
      if (min > slice2) {
        minPos = i
        min = slice2
      }
    }
  }

  return minPos
}

module.exports = solution
