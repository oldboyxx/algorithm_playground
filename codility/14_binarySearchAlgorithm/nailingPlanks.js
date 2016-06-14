// 62% - NEEDS REWRITE
function solution(A, B, C) {
  var planksLeft = A.length
  var nailsUsed = 0

  for (var i = 0; i < C.length; i++) {

    for (var k = 0; k < A.length; k++) {
      if (A[k] && A[k] <= C[i] && C[i] <= B[k]) {
        A[k] = null
        planksLeft--
      }
    }

    nailsUsed++
    if (!planksLeft) break;
  }

  return planksLeft ? -1 : nailsUsed
}

module.exports = solution
