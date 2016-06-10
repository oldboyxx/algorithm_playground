// 100%
function solution(A) {
  var len = A.length
  var currSlice = A[0]
  var maxSlice = A[0]

  for (var i = 1; i < len; i++) {
    currSlice = Math.max(A[i], currSlice + A[i])
    maxSlice = Math.max(currSlice, maxSlice)
  }

  return maxSlice
}

module.exports = solution
