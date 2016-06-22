function solution(input) {
  input = input.split('\n')

  for (var k = 1; k < input.length; k += 2) {
    var A = input[k+1].split(' ')
    var len = A.length
    var inversions = 0

    for (var i = 0; i < len-1; i++) {
      for (var j = i+1; j < len; j++) {
        if (+A[i] > +A[j]) inversions++
      }
    }

    console.log(inversions % 2 === 0 ? 'YES' : 'NO')
  }
}

module.exports = solution

/*
Larry has a permutation of  numbers, , whose unique elements range from  to  (i.e.: ). He wants  to be sorted, so he delegates the task of doing so to his robot. The robot can perform the following operation as many times as it wants:

Choose any  consecutive indices and rotate their elements in such a way that  rotates to , which rotates to , which rotates back to .
For example: if  and the robot rotates ,  becomes .

On a new line for each test case, print  if the robot can fully sort ; otherwise, print .

Input Format

The first line contains an integer, , the number of test cases.
The  subsequent lines each describe a test case over  lines:

An integer, , denoting the size of .
 space-separated integers describing , where the  value describes element .
*/