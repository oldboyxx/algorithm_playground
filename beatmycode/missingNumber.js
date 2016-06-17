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
