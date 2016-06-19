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
