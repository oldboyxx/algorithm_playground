function solution(N) {
  for (var i = 1; i <= N; i++) {
    console.log(' '.repeat(N-i) + '#'.repeat(i))
  }
}

module.exports = solution

/*
Consider a staircase of size :

   #
  ##
 ###
####
Observe that its base and height are both equal to , and the image is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size .

Input Format

A single integer, , denoting the size of the staircase.

Output Format

Print a staircase of size  using # symbols and spaces.

Note: The last line must have  spaces in it.
*/