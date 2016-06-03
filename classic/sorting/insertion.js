function solution(A) {
  var len = A.length

  for (var i = 1; i < len; i++) {
    var el = A[i]

    for (var j = i-1; j >= 0 && el < A[j]; j--) {
      A[j+1] = A[j]
    }

    A[j+1] = el
  }

  return A
}

module.exports = solution
