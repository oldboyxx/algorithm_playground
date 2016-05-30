// 77%
function solution(A) {
  var B = []

  A.forEach(n => {
    var index = B.indexOf(n)

    if (index > -1) {
      B.splice(index, 1)
    } else {
      B.push(n)
    }
  })

  return B[0]
}

module.exports = solution
