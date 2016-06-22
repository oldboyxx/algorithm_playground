function solution(str) {
  var A = str.split('\n')
  var N = A.length
  for (var i = 0; i < N; i++) A[i] = +A[i]

  var isSemiSorted = true
  var NIndex = A.indexOf(N)

  for (var i = NIndex; i >= 0; i--) {
    if (N-- !== A[i]) {
      isSemiSorted = false
      break;
    }
  }

  var result = isSemiSorted ? A.slice(NIndex+1) : A
  result.sort(function (a, b) { return b - a })
  for (var i = 0; i < result.length; i++) console.log(result[i])
}

/*solution("BMC_TEST_INPUT_MAGIC")*/

module.exports = solution

/*
Turtles would like to create a pyramid, where every turtle in the pile can only be on top of a larger turtle. The only move they can make is crawling out and then crawling on top. Since they're having a problem achieving this configuration, they ask you to write a program that can tell them in which order to move. You have to advise them, so that it takes the least amount of moves to rearrange.

There are N turtles, represented by their size as numbers in the interval [1, N] (1 and N included). For example: N=3 means there are 3 turtles, and their sizes are: 1, 2, 3.

The "BMC_TEST_INPUT_MAGIC" (with quotes) in the code will be replaced with the actual value of the input. The input is the current turtle stack from top to bottom, one turtle per line. The program has to output the names of whom need to move in order. First name printed will move first.

Sample input:
5
1
3
2
4

Sample output:
4
3
2
1
*/