function solution(A, el) {
  var len = A.length,
      start = 0,
      end = len-1,
      found

  while (typeof found === 'undefined' && end-start > -1) {

    var mid = Math.floor(start + (end-start)/2)
    if (el === A[mid]) found = mid

    if (el < A[mid]) {
      end = mid-1
    } else {
      start = mid+1
    }
  }

  return typeof found === 'undefined' ? -1 : found
}

module.exports = solution
