function greatestCommonDivisor(A, B) {
  if (!B) return A
  return greatestCommonDivisor(B, A % B)
}

function solution(A, B) {
  return (A * B) / greatestCommonDivisor(A, B)
}

function solution(arr) {
  var len = arr.length
  var A = Math.abs(arr[0])

  for (var i = 1; i < len; i++) {
    var B = Math.abs(arr[i])
    var C = A

    while (A && B) {
      A > B ? A %= B : B %= A
    }
    A = Math.abs(C * arr[i]) / (A + B)
  }
  return A
}

module.exports = solution
