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

/*
A string S consisting of N characters is considered to be properly nested if any of the following conditions is true:

S is empty;
S has the form "(U)" or "[U]" or "{U}" where U is a properly nested string;
S has the form "VW" where V and W are properly nested strings.
For example, the string "{[()()]}" is properly nested but "([)()]" is not.

Write a function:

int solution(char *S);
that, given a string S consisting of N characters, returns 1 if S is properly nested and 0 otherwise.

For example, given S = "{[()()]}", the function should return 1 and given S = "([)()]", the function should return 0, as explained above.

Assume that:

N is an integer within the range [0..200,000];
string S consists only of the following characters: "(", "{", "[", "]", "}" and/or ")".
Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(N) (not counting the storage required for input arguments).
*/