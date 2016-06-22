// 100%
function solution(S) {
  var len = S.length
  if (!len || len%2 === 0) return -1

  var mid = (len-1)/2
  var left = S.slice(0, mid)
  var right = S.slice(mid+1)

  return left.split('').reverse().join('') === right ? mid : -1
}

module.exports = solution
