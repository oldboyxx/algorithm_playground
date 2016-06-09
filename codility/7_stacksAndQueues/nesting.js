// 100%
function solution(S) {
  var len = S.length
  var open = 0
  var closed = 0

  for (var i = 0; i < len; i++) {
    if (S[i] === '(') {
      open++
    } else {
      closed++
    }

    if (open < closed) return 0
  }

  return open - closed === 0 ? 1 : 0
}

module.exports = solution
