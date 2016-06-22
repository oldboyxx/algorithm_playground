function solution(input) {
  var N = +input
  var sum = 0

  for (var i = 1; i <= N; i++) {
    var num = i
    while (num) {
      sum += num % 10
      num = Math.floor(num/10)
    }
  }

  console.log(sum)
}

/*solution("BMC_TEST_INPUT_MAGIC")*/

module.exports = solution

/*
Find the sum of the digits of all the numbers from 1 to N (both ends included).

For N = 10 the sum is 1+2+3+4+5+6+7+8+9+(1+0) = 46

Preferably in O(logN) time. N is at least 1.

The "BMC_TEST_INPUT_MAGIC" (with quotes) in the code will be replaced with the actual value of the input. The input is in the format: "1234"
*/