// 100% - NEED TO REWRITE
function solution(A) {
  var len = A.length
  var maxEnds = [], maxEnd = 0
  var maxBegins = [], maxBegin = 0

  for (var i = 0; i < len; i++) {
    maxEnds[i] = 0
    maxBegins[i] = 0
  }

  for (var i = 1; i < len-1; i++) {
    maxEnd = Math.max(0, A[i] + maxEnd)
    maxEnds[i] = maxEnd
  }

  for (var i = len-2; i >= 0; i--) {
    maxBegin = Math.max(0, A[i] + maxBegin)
    maxBegins[i] = maxBegin
  }

  var maxDoubleSlice = 0
  for (var i = 0; i < len-2; i++) {
    maxDoubleSlice = Math.max(maxDoubleSlice, maxEnds[i] + maxBegins[i+2])
  }

  return maxDoubleSlice
}

// 100% - NEED TO REWRITE
function solution(A) {
  var len = A.length
  var leftSums = [], rightSums = []

  for (var i = 0; i < len; i++) {
    leftSums[i] = 0
    rightSums[i] = 0
  }

  for (var i = 1; i < len-1; i++) {
    leftSums[i] = Math.max(leftSums[i-1] + A[i], 0)
  }

  for (var i = len-2; i > 0; i--) {
    rightSums[i] = Math.max(rightSums[i+1] + A[i], 0)
  }

  var max = 0
  for (var i = 1; i < len-1; i++) {
    max = Math.max(max, leftSums[i-1] + rightSums[i+1])
  }

  return max
}

module.exports = solution
