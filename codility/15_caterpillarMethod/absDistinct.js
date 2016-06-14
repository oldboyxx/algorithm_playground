// 100%
function solution(A) {
  var len = A.length
  var uniq = {}
  var size = 0

  for (var i = 0; i < len; i++) {
    var abs = Math.abs(A[i])
    if (!uniq[abs]) {
      uniq[abs] = true
      size++
    }
  }

  return size
}

module.exports = solution
