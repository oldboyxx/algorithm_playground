function solution(N) {
  N = +N
  console.log(N === 1 ? 8 : Math.pow(N*2+1, 2))
}

/*solution("BMC_TEST_INPUT_MAGIC")*/

module.exports = solution

/*The king in chess can move to any neighboring square horizontally, vertically, or diagonally. Assuming that the king starts on some square of an infinite chessboard, in how many different squares can it be after N moves?

N is at least 1.

The "BMC_TEST_INPUT_MAGIC" (with quotes) in the code will be replaced with the actual value of the input. The input is in the format: "1234"*/
