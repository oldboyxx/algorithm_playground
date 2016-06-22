function solution(S) {
  var chars = {}
  for (var i = 0; i < S.length; i++) {
    chars[S[i]] = chars[S[i]] ? chars[S[i]]+1 : 1
  }

  var nonEvenCount = 0
  for (c in chars) {
    if (chars[c] % 2) nonEvenCount++
  }

  console.log(nonEvenCount > 1 ? 'NO' : 'YES')
}

module.exports = solution

/*
Dothraki are planning an attack to usurp King Robert's throne. King Robert learns of this conspiracy from Raven and plans to lock the single door through which the enemy can enter his kingdom.

But, to lock the door he needs a key that is an anagram of a certain palindrome string.

The king has a string composed of lowercase English letters. Help him figure out whether any anagram of the string can be a palindrome or not.

Input Format
A single line which contains the input string.

Constraints
 length of string
Each character of the string is a lowercase English letter.

Output Format
A single line which contains YES or NO in uppercase.
*/