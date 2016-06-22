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

/*
Print to the standard output a chessboard of size N,M where N is the number of columns and M is the number of rows.
You have to print a 0 where the board is white and a 1 otherwise.
Index (0,0) is white and it is the top left cell in the produced output.

The "BMC_TEST_INPUT_MAGIC" (with quotes) in the code will be replaced with the actual value of the input. It's a string in the form of "N,M".

Sample input:
7,4

Sample output:
0101010
1010101
0101010
1010101
*/
