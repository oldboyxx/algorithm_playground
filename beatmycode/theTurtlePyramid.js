function solution(str) {
  var A = str.split('\n')
  var N = A.length
  for (var i = 0; i < N; i++) A[i] = +A[i]

  var isSemiSorted = true
  var NIndex = A.indexOf(N)

  for (var i = NIndex; i >= 0; i--) {
    if (N-- !== A[i]) {
      isSemiSorted = false
      break;
    }
  }

  var result = isSemiSorted ? A.slice(NIndex+1) : A
  result.sort(function (a, b) { return b - a })
  for (var i = 0; i < result.length; i++) console.log(result[i])
}

/*solution("BMC_TEST_INPUT_MAGIC")*/

module.exports = solution
