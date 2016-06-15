// 100%
function solution(K, A) {
  var newArr = []
  var sum = 0

  for (var i = 0; i < A.length; i++) {
    if (sum < K) sum += A[i]
    if (sum >= K) {
      newArr.push(sum)
      sum = 0
    }
  }

  return newArr.length
}

module.exports = solution
