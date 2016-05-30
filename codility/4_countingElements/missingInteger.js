// 100%
function uniq(arr) {
  var o = {}, i, len = arr.length, uniqArr = []
  for(i = 0; i < len; i++) o[arr[i]] = arr[i]
  for(i in o) uniqArr.push(o[i])
  return uniqArr
}

function solution(A) {
  A = A.filter((n, i) => n > 0)
  A = uniq(A)
  A.sort((a, b) => a - b)

  if (!A.length) return 1
  var result = A[A.length-1] + 1
  var curr = 1

  for (var i = 0; i < A.length; i++) {
    if (A[i] !== curr) {
      result = curr
      break;
    }
    curr++
  }

  return result
}

// 100%
function solution(A) {
  A = A.filter(n => n > 0)
  A.sort((a, b) => a - b)

  if (A[0] > 1 || !A.length) return 1
  var result = A[A.length-1] + 1

  for (var i = 0; i < A.length; i++) {
    if (A[i-1]+1 && A[i-1]+1 < result && A[i] - A[i-1] > 1) {
      result = A[i-1]+1
      break;
    }
  }

  return result
}

module.exports = solution
