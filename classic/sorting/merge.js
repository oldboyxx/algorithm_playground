function merge(left, right) {
  var l = 0, r = 0,
      result = [],
      leftLen = left.length,
      rightLen = right.length

  while (l < leftLen && r < rightLen) {
    if (left[l] < right[r]) {
      result.push(left[l++])
    } else {
      result.push(right[r++])
    }
  }

  while (l < leftLen) result.push(left[l++])
  while (r < rightLen) result.push(right[r++])

  return result
}

function solution(A) {
  var len = A.length
  if (len < 2) return A

  var mid = Math.ceil(len/2)
  var left = A.slice(0, mid)
  var right = A.slice(mid)

  return merge(solution(left), solution(right))
}

module.exports = solution
