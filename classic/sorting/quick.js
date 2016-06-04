function swap(A, x, y) {
  var temp = A[x]
  A[x] = A[y]
  A[y] = temp
}

function partition(A, wall, pivot) {
  var mid = wall + Math.round((pivot-wall)/2)
  swap(A, pivot, mid)

  for (var i = wall; i <= pivot; i++) {
    if (A[i] < A[pivot]) {
      swap(A, i, wall)
      wall++

    } else if (i === pivot) {
      swap(A, pivot, wall)
    }
  }

  return wall
}

function divide(A, start, end) {
  var wall = partition(A, start, end)

  if (wall-start > 0) divide(A, start, wall-1)
  if (end-wall > 0) divide(A, wall+1, end)
}

function solution(A) {
  if (A.length < 2) return A
  divide(A, 0, A.length-1)
  return A
}

module.exports = solution
