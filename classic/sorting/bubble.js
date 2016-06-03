function solution(A) {
  var end = A.length-1

  for (var i = 0; i < end; i++) {
    var modified = false

    for (var j = 0; j < end-i; j++) {
      if (A[j] > A[j+1]) {
        var temp = A[j+1]
        A[j+1] = A[j]
        A[j] = temp
        modified = true
      }
    }

    if (!modified) break;
  }

  return A
}

module.exports = solution
