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
