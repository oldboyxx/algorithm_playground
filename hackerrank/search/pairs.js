// 100%
function solution(input) {
  input = input.split('\n')
  var K = +input[0].split(' ')[1]
  var A = input[1].split(' ')
  var len = A.length, i, j
  for (i = 0; i < len; i++) A[i] = +A[i]

  var vals = {}
  for (i = 0; i < len; i++) {
    vals[A[i]] = vals[A[i]] || []
    vals[A[i]].push(i)
  }

  var pairs = 0
  for (i = 0; i < len; i++) {
    var t1 = vals[A[i]+K], t2 = vals[A[i]-K]
    if (t1) {
      for (j = 0; j < t1.length; j++) {
        if (t1[j] > i) pairs++
      }
    }
    if (t2) {
      for (j = 0; j < t2.length; j++) {
        if (t2[j] > i) pairs++
      }
    }
  }

  console.log(pairs)
}

module.exports = solution
