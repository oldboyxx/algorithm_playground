// 100%
function solution(A) {
  A.sort((a, b) => a-b)

  var len = A.length
  var count = 0

  for (var i = 0; i < len; i++) {
    A[i] === A[i-1] ? count++ : count = 1

    if (count%2 === 1 && A[i] !== A[i+1]) {
      return A[i]
    }
  }
}

module.exports = solution
