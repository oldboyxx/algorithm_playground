function solution(A) {
  var len = A.length
  var pos = 0, neg = 0, zero = 0

  for (var i = 0; i < len; i++) {
    if (A[i] > 0) {
      pos++
    } else if (A[i] < 0) {
      neg++
    } else {
      zero++
    }
  }

  console.log((pos/len).toFixed(6))
  console.log((neg/len).toFixed(6))
  console.log((zero/len).toFixed(6))
}

module.exports = solution
