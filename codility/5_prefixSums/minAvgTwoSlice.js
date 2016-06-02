// 60%
function solution(A) {
  var len = A.length
  var min = Infinity
  var minIndex = 0

  for (var i = 0; i < len; i++) {
    var sum = A[i]

    for (var j = i+1; j < len; j++) {
      sum = sum + A[j]
      var avg = sum / (j - i + 1)
      if (avg < min) {
        min = avg
        minIndex = i
      }
    }
  }

  return minIndex
}

module.exports = solution
