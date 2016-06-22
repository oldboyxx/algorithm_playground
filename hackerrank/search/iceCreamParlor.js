function solution(input) {
  input = input.split('\n')
  for (var k = 1; k < input.length; k += 3) {
    var M = input[k]
    var A = input[k+2].split(' ')
    var len = A.length
    for (var i = 0; i < len; i++) A[i] = +A[i]

    var items = {}
    for (var i = 0; i < len; i++) {
      items[A[i]] = items[A[i]] || []
      items[A[i]].push(i)
    }

    for (var i = 0; i < len; i++) {
      var target = items[M-A[i]]

      if (target && (target[0] !== i || target[1] !== i)) {
        var first = i+1
        var second = target[0] === i ? target[1]+1 : target[0]+1
        break;
      }
    }

    console.log(first < second ? first+' '+second : second+' '+first)
  }
}

module.exports = solution

/*
Sunny and Johnny together have  dollars they want to spend on ice cream. The parlor offers  flavors, and they want to choose two flavors so that they end up spending the whole amount.

You are given the cost of these flavors. The cost of the  flavor is denoted by . You have to display the indices of the two flavors whose sum is .

Input Format

The first line of the input contains ;  test cases follow.
Each test case follows the format detailed below: The first line contains . The second line contains . The third line contains  space-separated integers denoting the price of each flavor. Here, the  integer denotes .

Output Format

Output two integers, each of which is a valid index of a flavor. The lower index must be printed first. Indices are indexed from  to .
*/