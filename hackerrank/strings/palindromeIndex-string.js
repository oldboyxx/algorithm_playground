function solution(input) {
  input = input.split('\n').slice(1)

  function isPalindrome(S) {
    var len = S.length
    for (var i = 0; i < len; i++) {
      if (S[i] !== S[len-i-1]) return false
    }
    return true
  }

  for (var k = 0; k < input.length; k++) {
    var S = input[k]
    var len = S.length

    if (isPalindrome(S)) {
      console.log(-1)
    } else {
      for (var i = 0; i < len; i++) {
        var j = len-i-1
        if (S[i] !== S[j]) {
          if (isPalindrome(S.slice(0, i) + S.slice(i+1))) {
            console.log(i)
            break;
          } else if (isPalindrome(S.slice(0, j) + S.slice(j+1))) {
            console.log(j)
            break;
          } else {
            console.log(-1)
            break;
          }
        }
      }
    }
  }
}

module.exports = solution

/*
Given a string, , of lowercase letters, determine the index of the character whose removal will make  a palindrome. If  is already a palindrome or no such character exists, then print . There will always be a valid solution, and any correct answer is acceptable. For example, if  "bcbc", we can either remove 'b' at index  or 'c' at index .

Input Format

The first line contains an integer, , denoting the number of test cases.
Each line  of the  subsequent lines (where ) describes a test case in the form of a single string, .

Constraints

All characters are lowercase English letters.
Output Format

Print an integer denoting the zero-indexed position of the character that makes  not a palindrome; if  is already a palindrome or no such character exists, print .
*/