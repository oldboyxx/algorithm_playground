// 100%
function solution(A) {
  var curr = 1
  var result = 1

  A.sort((a, b) => a - b)

  A.forEach(n => {
    if (n !== curr) result = 0
    curr++
  })

  return result
}

module.exports = solution
