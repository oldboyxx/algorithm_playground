// 100%
function inferiorSolution(A) {
  if (!A.length) return 1
  if (A.length === 1 && A[0] === 1) return 2
  if (A.length === 1 && A[0] === 2) return 1

  A.sort((a, b) => a - b)
  if (A[0] === 2) return 1

  var missing

  A.forEach((n, i) => {
    var next = A[i+1]
    if (next && next - n !== 1) missing = n + 1
  })

  if (!missing) return A[A.length-1] + 1

  return missing
}

// 100%
function solution(A) {
  var next = 1
  var i = 0

  A.sort((a, b) => a - b)

  while(next === A[i]) {
    next++
    i++
  }

  return next
}

module.exports = solution
