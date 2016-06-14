// 50% - NOT ACCURATE - NEEDS REWRITE
function fibSequence(N) {
  var last = 0, curr = 1
  var sequence = {}

  while (curr <= N) {
    var temp = last
    last = curr
    curr += temp
    sequence[last] = true
  }

  return sequence
}

function solution(A) {
  A.unshift(1)
  A.push(1)
  var len = A.length
  var sequence = fibSequence(len-1)

  if (sequence[len-1]) return 1

  var jumps = 0
  var pos = 0
  var i = len-1

  while (i > pos) {
    if (A[i] && sequence[i-pos]) {
      pos = i
      i = len-1
      jumps++
      if (pos === len-1) return jumps
    } else {
      if (--i === pos) {
        if (pos === 0) break;
        A[pos] = 0
        pos = 0
        i = len-1
        jumps = 0
      }
    }
  }

  return -1
}

module.exports = solution
