function solution(a) {
  var len = a.length-1
  var sum1 = 0
  var sum2 = 0

  for (var i = 0; i <= len; i++) {
    sum1 += a[i][i]
    sum2 += a[i][len-i]
  }

  var diff = Math.abs(sum1-sum2)

  return diff
}

module.exports = solution
