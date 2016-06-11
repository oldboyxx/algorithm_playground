function solution(N) {
  var a = 2
  var b = 0

  while (b < 3 && N != 1)  {
    if (N % a === 0) {
      N = N / a
      b++
    } else {
      a++
    }
  }
  return b === 2
}

module.exports = solution
