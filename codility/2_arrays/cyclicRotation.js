// 100%
function solution(A, K) {
  if (!A.length || A.length === 1) return A

  while (K--) {
    A.unshift(A.pop())
  }

  return A
}

module.exports = solution
