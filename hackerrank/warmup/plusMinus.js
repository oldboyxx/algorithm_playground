function solution(A) {
  var len = A.length
  var pos = 0, neg = 0, zero = 0

  for (var i = 0; i < len; i++) {
    if (A[i] > 0) {
      pos++
    } else if (A[i] < 0) {
      neg++
    } else {
      zero++
    }
  }

  console.log((pos/len).toFixed(6))
  console.log((neg/len).toFixed(6))
  console.log((zero/len).toFixed(6))
}

module.exports = solution

/*
Given an array of integers, calculate which fraction of its elements are positive, which fraction of its elements are negative, and which fraction of its elements are zeroes, respectively. Print the decimal value of each fraction on a new line.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

Input Format

The first line contains an integer, , denoting the size of the array.
The second line contains  space-separated integers describing an array of numbers .

Output Format

You must print the following  lines:

A decimal representing of the fraction of positive numbers in the array.
A decimal representing of the fraction of negative numbers in the array.
A decimal representing of the fraction of zeroes in the array.
*/