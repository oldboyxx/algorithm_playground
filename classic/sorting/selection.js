function solution(A) {
  var len = A.length

  for (var i = 0; i < len-1; i++) {
    var minIndex = i

    for (var j = i+1; j < len; j++) {
      if (A[minIndex] > A[j]) minIndex = j
    }

    var temp = A[minIndex]
    A[minIndex] = A[i]
    A[i] = temp
  }

  return A
}

module.exports = solution
