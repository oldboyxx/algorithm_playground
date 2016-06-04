function solution(A, el) {
  var len = A.length
  for (var i = 0; i < len; i++) if (A[i] === el) return i
  return -1
}

module.exports = solution
