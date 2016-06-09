// 100%
function solution(H) {
  var len = H.length
  var stack = []
  var count = 0

  for (var i = 0; i < len; i++) {
    while (stack.length && stack[stack.length-1] > H[i]) stack.pop()

    if (!stack.length || stack[stack.length-1] < H[i]) {
      stack.push(H[i])
      count++
    }
  }

  return count
}

module.exports = solution
