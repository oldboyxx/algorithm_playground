// 100%
function solution(K, M, A) {
  var len = A.length
  var start = 0
  var end = 0

  for (var i = 0; i < len; i++) {
    end += A[i]
    start = Math.max(start, A[i])
  }

  if (!start) return 0
  if (K === 1) return end
  var mid
  var minSum = end

  while (start <= end) {
    var oldMid = mid
    mid = Math.floor((end+start)/2)
    if (oldMid === mid) break;

    var count = 0
    var blockSum = 0
    var maxBlockSum = 0

    for (var i = 0; i < len; i++) {
      if (blockSum + A[i] > mid) {
        count++
        maxBlockSum = Math.max(maxBlockSum, blockSum)
        blockSum = 0
      }

      blockSum += A[i]

      if (i === len-1) {
        count++
        maxBlockSum = Math.max(maxBlockSum, blockSum)
      }
    }

    if (count <= K) {
      minSum = Math.min(minSum, maxBlockSum)
      end = mid
    } else {
      start = mid + 1
    }
  }

  return minSum
}

module.exports = solution
