// 100%
function solution(A, B) {
  var i = 1
  var fib = [1, 1]
  var maxA = Math.max.apply(null, A)
  var maxB = Math.max.apply(null, B)

  while (i++ <= maxA) {
    fib.push((fib[i-1] + fib[i-2]) % Math.pow(2, maxB))
  }

  var result = []
  for (i = 0; i < A.length; i++) {
    result.push(fib[A[i]] % Math.pow(2, B[i]))
  }

  return result
}

module.exports = solution
