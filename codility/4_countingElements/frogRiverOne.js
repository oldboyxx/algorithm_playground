// 100%
function solution(X, A) {
  var len = A.length
  var neededSum = 0
  var sum = 0
  var fallen = {}

  for (var i = 1; i <= X; i++) neededSum += i

  for (var i = 0; i < len; i++) {

    if (!fallen[A[i]]) {
      fallen[A[i]] = true
      sum += A[i]
      if (sum === neededSum) return i
    }
  }

  return -1
}

module.exports = solution
