function solution(str) {
  var N = +str.split(',')[0]
  var M = +str.split(',')[1]

  for (var i = 2; i < M+2; i++) {
    var str = ''
    if (i % 2 === 0) {
      for (var j = 2; j < N+2; j++) str += j % 2 === 0 ? 0 : 1
    } else {
      for (var j = 1; j < N+1; j++) str += j % 2 === 0 ? 0 : 1
    }
    console.log(str)
  }
}

/*solution("BMC_TEST_INPUT_MAGIC")*/

module.exports = solution
