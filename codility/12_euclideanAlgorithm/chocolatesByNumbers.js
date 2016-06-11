// 100%
function gcd(A, B) {
  if (!B) return A
  return gcd(B, A % B)
}

function solution(N, M) {
  return N / gcd(N, M)
}

module.exports = solution
