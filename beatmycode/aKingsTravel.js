function solution(N) {
  N = +N
  console.log(N === 1 ? 8 : Math.pow(N*2+1, 2))
}

/*solution("BMC_TEST_INPUT_MAGIC")*/

module.exports = solution
