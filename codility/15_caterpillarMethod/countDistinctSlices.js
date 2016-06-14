// 70% - THIS IS O(N2) - TOO SLOW
function solution(M, A) {
  var len = A.length
  var sliceCount = A.length

  for (var i = 0; i < len-1; i++) {
    var count = 0
    var uniq = {}
    uniq[A[i]] = true

    for (var j = i+1; j < len; j++) {
      if (uniq[A[j]]) break;
      uniq[A[j]] = true
      count++
    }

    sliceCount += count
    if (sliceCount > 1000000000) return 1000000000
  }

  return sliceCount
}

module.exports = solution
