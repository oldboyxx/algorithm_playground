function solution(X, A) {
  var len = A.length
  var diffCount = 0

  for (var i = 0; i < len; i++) {
    if (A[i] !== X) diffCount++
  }

  var leftSameCount = 0
  var leftDiffCount = 0

  for (var i = 0; i < len; i++) {
    if (A[i-1] === X) {
      leftSameCount++
    } else if (typeof A[i-1] !== 'undefined' && A[i-1] !== X) {
      leftDiffCount++
    }

    if (leftSameCount === diffCount - leftDiffCount) return i
  }
}

module.exports = solution
