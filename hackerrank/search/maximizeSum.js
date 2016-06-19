// THIS IS WRONG - 0%
function solution(input) {
  input = input.split('\n')

  for (var k = 1; k < input.length; k += 2) {
    if (!input[k+1]) break;
    var M = +input[k].split(' ')[1]
    var A = input[k+1].split(' ')
    var len = A.length
    for (var i = 0; i < len; i++) A[i] = +A[i]

    var currSlice = A[0]%M
    var maxSlice = currSlice

    for (var i = 1; i < len; i++) {
      currSlice = Math.max(A[i]%M, (currSlice + A[i]%M)%M)
      maxSlice = Math.max(currSlice, maxSlice)
    }

    console.log(maxSlice)
  }
}

module.exports = solution
