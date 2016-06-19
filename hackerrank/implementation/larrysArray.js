function solution(input) {
  input = input.split('\n')

  for (var k = 1; k < input.length; k += 2) {
    var A = input[k+1].split(' ')
    var len = A.length
    var inversions = 0

    for (var i = 0; i < len-1; i++) {
      for (var j = i+1; j < len; j++) {
        if (+A[i] > +A[j]) inversions++
      }
    }

    console.log(inversions % 2 === 0 ? 'YES' : 'NO')
  }
}

module.exports = solution
