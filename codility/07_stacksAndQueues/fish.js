// 75%
function solution(A, B) {
  var done = false

  while (!done) {
    done = true

    for (var i = 0; i < A.length; i++) {

      if (B[i] === 1 && B[i+1] === 0) {
        done = false

        if (A[i] > A[i+1]) {
          A.splice(i+1, 1)
          B.splice(i+1, 1)
        } else {
          A.splice(i, 1)
          B.splice(i, 1)
        }
      }
    }
  }

  return A.length
}

// 100% - NEED TO REWRITE
function solution(A, B) {
  var len = A.length
  var stack = []

  for (var i = 0; i < len; i++) {
    var liveFish = i

    while (B[liveFish] === 0 && B[stack[stack.length-1]] === 1) {
      var otherFish = stack.pop()
      if (A[otherFish] > A[liveFish]) liveFish = otherFish
    }

    stack.push(liveFish)
  }

  return stack.length
}

module.exports = solution
