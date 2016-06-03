var solution = function(A) {
  var len = A.length
  var gap = Math.floor(len/2)

  while (gap > 0) {
    for (var i = gap; i < len; i++) {
      var el = A[i]

      for (var j = i-gap; j >= 0 && el < A[j]; j -= gap) {
        A[j+gap] = A[j]
      }

      A[j+gap] = el
    }

    gap = Math.floor(gap/2)
  }

  return A
}

module.exports = solution
