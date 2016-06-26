function solution(A) {
  var len = A.length-1

  for (var i = len; i > len/2; i--) {
    var temp = A[i]
    A[i] = A[len-i]
    A[len-i] = temp
  }

  return A
}

module.exports = solution
