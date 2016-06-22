function solution(str) {
  var split = str.split(':')
  var N = split[0]
  var sequence = split[1].split(',')

  for (var i = 0; i < N; i++) {
    if (+sequence[i] !== i+1) {
      console.log(i+1)
      return
    }
  }
}

/*solution("BMC_TEST_INPUT_MAGIC")*/

module.exports = solution

/*
One number is deleted from the sequence 1,2,3, ... N. You get the numbers in a random order, and have to find the deleted one. Preferably in O(N).

The "BMC_TEST_INPUT_MAGIC" (with quotes) in the code will be replaced with the actual value of the input. The input is in the format: "N:1,2,3,...,N" where N is the end of the sequence. Any item can be missing from 1 to N, so you get N-1 numbers!

N is at least 1.

Example:
"8:1,2,3,4,5,6,8" -> 7 is the deleted item
*/