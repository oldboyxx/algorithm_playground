// 100%
function solution(A) {
  var len = A.length
  var currProfit = 0
  var maxProfit = 0
  var maxExit = A[len-1]

  for (var i = len-2; i >= 0; i--) {
    currProfit = maxExit - A[i]
    maxProfit = Math.max(maxProfit, currProfit)
    maxExit = Math.max(maxExit, A[i])
  }

  return maxProfit
}

module.exports = solution
