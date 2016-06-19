function solution(input) {
  var A = input.split('\n')
  for (var k = 0; k < A.length; k++) A[k] = +A[k]

  for (var i = 1; i < A.length; i += 3) {
    var n = A[i]
    var a = A[i+1]
    var b = A[i+2]
    var result = []

    for (var j = 0; j < n; j++) {
      result.push(j*b + (n-1-j)*a)
    }

    result.sort((a, b) => a - b)
    console.log(result.join(' '))
  }
}

module.exports = solution
