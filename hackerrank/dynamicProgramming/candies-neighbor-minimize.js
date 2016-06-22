// 66%
function solution(input) {
  var A = input.split('\n').slice(1), i
  var len = A.length, i
  for (i = 0; i < len; i++) A[i] = +A[i]

  if (len <= 1) return console.log(len)

  var num = []
  for (i = 0; i < len; i++) num.push(1)

  for (i = 1; i < len; i++) {
    if (A[i] > A[i-1]) {
      num[i] = num[i-1]+1
    }
  }

  for (i = len-1; i > 0; i--) {
    if (A[i-1] > A[i]) {
      num[i-1] = Math.max(num[i]+1, num[i-1])
    }
  }

  var ret = 0
  for (i = 0; i < len; i++) ret += num[i]
  console.log(ret)
}

module.exports = solution

/*
Alice is a kindergarden teacher. She wants to give some candies to the children in her class.  All the children sit in a line ( their positions are fixed), and each  of them has a rating score according to his or her performance in the class.  Alice wants to give at least 1 candy to each child. If two children sit next to each other, then the one with the higher rating must get more candies. Alice wants to save money, so she needs to minimize the total number of candies given to the children.

Input Format

The first line of the input is an integer N, the number of children in Alice's class. Each of the following N lines contains an integer that indicates the rating of each child.

Constraints

1 <= N <= 10^5
1 <= ratingi <= 10^5

Output Format

Output a single line containing the minimum number of candies Alice must buy.
*/