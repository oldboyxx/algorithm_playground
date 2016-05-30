// 100%
function solution(X, A) {
  var neededSum = 0
  for (var i = 1; i <= X; i++) {
    neededSum += i
  }

  var fallen = {}
  var currSum = 0
  var neededPos

  for (var i = 0; i < A.length; i++) {
    var n = A[i]

    if (!fallen[n]) {
      fallen[n] = true
      currSum += n
    }

    if (currSum === neededSum) {
      neededPos = i
      break
    }
  }

  if (typeof neededPos === 'undefined') return -1
  return neededPos
}

module.exports = solution
