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
