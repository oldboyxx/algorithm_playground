// 100%
function solution(A) {
  var len = A.length
  var oneCount = 0
  var oneCounts = []
  for (var k = 0; k < len; k++) oneCounts.push(0)

  for (var j = len-1; j >= 0; j--) {
    oneCounts[j] = A[j] ? oneCount++ : oneCount
  }

  var pairsCount = 0
  for (var i = 0; i < len; i++) {
    if (!A[i]) pairsCount = pairsCount + oneCounts[i]
    if (pairsCount > 1000000000) {
      pairsCount = -1
      break;
    }
  }

  return pairsCount
}

module.exports = solution
