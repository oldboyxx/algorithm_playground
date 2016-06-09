// 87%
function solution(S) {
  var lastLen

  while (lastLen !== S.length) {
    lastLen = S.length
    S = S.replace(/\(\)|\[\]|\{\}/g, '')
  }

  return S.length ? 0 : 1
}

// 100%
function solution(S) {
  var len = S.length
  var openers = []

  if (len % 2 === 1 || /\(\[\{/.test(S[len-1])) return 0

  for (var i = 0; i < len; i++) {

    if (S[i] === '(' || S[i] === '[' || S[i] === '{') {
      openers.push(S[i])
    } else {
      var lastOpener = openers.pop()
      if ((lastOpener === '(' && S[i] !== ')') ||
          (lastOpener === '[' && S[i] !== ']') ||
          (lastOpener === '{' && S[i] !== '}')) {

        return 0
      }
    }
  }

  return openers.length ? 0 : 1
}

module.exports = solution
