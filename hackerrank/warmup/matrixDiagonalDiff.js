function solution(a) {
  var len = a.length-1
  var sum1 = 0
  var sum2 = 0

  for (var i = 0; i <= len; i++) {
    sum1 += a[i][i]
    sum2 += a[i][len-i]
  }

  var diff = Math.abs(sum1-sum2)

  console.log(diff)
}

module.exports = solution

/*
Given a square matrix of size , calculate the absolute difference between the sums of its diagonals.

Input Format

The first line contains a single integer, . The next  lines denote the matrix's rows, with each line containing space-separated integers describing the columns.

Output Format

Print the absolute difference between the two sums of the matrix's diagonals as a single integer.
*/