// 100%
function solution(A) {
  var len = A.length
  var uniq = {}
  var size = 0

  for (var i = 0; i < len; i++) {
    if (!uniq[A[i]]) {
      uniq[A[i]] = true
      size++
    }
  }

  return size
}

module.exports = solution
