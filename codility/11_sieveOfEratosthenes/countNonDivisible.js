// 100%
function getDivisors(N) {
  var divisors = []
  var limit = Math.floor(Math.sqrt(N))

  for (var i = 1; i <= limit; i++) {
    if (N % i === 0) {
      divisors.push(i)
      if (N / i !== i) divisors.push(N / i)
    }
  }

  return divisors
}

function solution(A) {
  var len = A.length
  var result = []
  var counts = {}
  for (var i = 0; i < len; i++) counts[A[i]] = 0
  for (var i = 0; i < len; i++) counts[A[i]]++

  for (var i = 0; i < len; i++) {
    var count = len
    var divisors = getDivisors(A[i])
    var dlen = divisors.length

    for (var d = 0; d < dlen; d++) {
      if (counts[divisors[d]]) count -= counts[divisors[d]]
    }

    result.push(count)
  }

  return result
}

module.exports = solution
