function solution(input) {
  var A = input.split('\n')
  for (var k = 0; k < A.length; k++) A[k] = +A[k]

  for (var i = 1; i < A.length; i += 3) {
    var n = A[i]
    var a = A[i+1]
    var b = A[i+2]
    var result = []

    for (var j = 0; j < n; j++) {
      result.push(j*b + (n-1-j)*a)
    }

    result.sort((a, b) => a - b)
    console.log(result.join(' '))
  }
}

module.exports = solution

/*
Manasa is out on a hike with friends. She finds a trail of stones with numbers on them. She starts following the trail and notices that two consecutive stones have a difference of either  or . Legend has it that there is a treasure trove at the end of the trail and if Manasa can guess the value of the last stone, the treasure would be hers. Given that the number on the first stone was , find all the possible values for the number on the last stone.

Note: The numbers on the stones are in increasing order.

Input Format
The first line contains an integer , i.e. the number of test cases.  test cases follow; each has 3 lines. The first line contains  (the number of stones). The second line contains , and the third line contains .

Output Format
Space-separated list of numbers which are the possible values of the last stone in increasing order.
*/