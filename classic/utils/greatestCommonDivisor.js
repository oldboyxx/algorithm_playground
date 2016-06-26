function solution(A, B) {
  if (!B) return A
  return solution(B, A % B)
}

function solution(arr) {
  var len = arr.length
  var A = Math.abs(arr[0])

  for (var i = 1; i < len; i++) {
    var B = Math.abs(arr[i])

    while (A && B) {
      A > B ? A %= B : B %= A
    }
    A += B
  }
  return A
}

module.exports = solution
