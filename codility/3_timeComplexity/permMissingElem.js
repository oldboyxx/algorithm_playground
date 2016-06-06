// 100%
function solution(A) {
  A.sort((a, b) => a - b)
  var len = A.length

  for (var i = 0; i <= len; i++) {
    if (i+1 !== A[i]) {
      missing = i+1
      break;
    }
  }

  return missing
}

module.exports = solution
