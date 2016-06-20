// 66%
function solution(input) {
  var A = input.split('\n').slice(1), i
  var len = A.length, i
  for (i = 0; i < len; i++) A[i] = +A[i]

  if (len <= 1) return console.log(len)

  var num = []
  for (i = 0; i < len; i++) num.push(1)

  for (i = 1; i < len; i++) {
    if (A[i] > A[i-1]) {
      num[i] = num[i-1]+1
    }
  }

  for (i = len-1; i > 0; i--) {
    if (A[i-1] > A[i]) {
      num[i-1] = Math.max(num[i]+1, num[i-1])
    }
  }

  var ret = 0
  for (i = 0; i < len; i++) ret += num[i]
  console.log(ret)
}

module.exports = solution
