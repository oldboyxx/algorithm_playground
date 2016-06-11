function solution(N) {
  var last = 0, curr = 1
  var sequence = [0]

  while (N-- > 0) {
    var temp = last
    last = curr
    curr += temp
    sequence.push(last)
  }

  return sequence
}

module.exports = solution
