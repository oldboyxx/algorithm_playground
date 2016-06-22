// 100%
function solution(A) {
  var len = A.length
  var pos = []
  var neg = []
  var min = Infinity

  for (var i = 0; i < len; i++) {
    A[i] >= 0 ? pos.push(A[i]) : neg.push(A[i])
  }

  pos.sort((a, b) => a - b)
  neg.sort((a, b) => b - a)

  if (pos[0] === 0) return 0
  if (pos.length) min = pos[0]*2
  if (neg.length) min = Math.min(min, Math.abs(neg[0]*2))
  if (!neg.length || !pos.length) return min

  for (var i = 0; i < neg.length; i++) {
    var start = 0
    var end = pos.length-1
    var currNeg = neg[i]

    while (start <= end) {
      var mid = Math.floor((start+end)/2)
      var currPos = pos[mid]
      min = Math.min(min, Math.abs(currNeg+currPos))

      if (end === start) break;
      if (Math.abs(currNeg) <= currPos) {
        end = mid
      } else {
        start = mid + 1
      }
    }

    if (!min) return 0
  }

  return min
}

module.exports = solution

/*
Let A be a non-empty zero-indexed array consisting of N integers.

The abs sum of two for a pair of indices (P, Q) is the absolute value |A[P] + A[Q]|, for 0 ≤ P ≤ Q < N.

For example, the following array A:

  A[0] =  1
  A[1] =  4
  A[2] = -3
has pairs of indices (0, 0), (0, 1), (0, 2), (1, 1), (1, 2), (2, 2).
The abs sum of two for the pair (0, 0) is A[0] + A[0] = |1 + 1| = 2.
The abs sum of two for the pair (0, 1) is A[0] + A[1] = |1 + 4| = 5.
The abs sum of two for the pair (0, 2) is A[0] + A[2] = |1 + (−3)| = 2.
The abs sum of two for the pair (1, 1) is A[1] + A[1] = |4 + 4| = 8.
The abs sum of two for the pair (1, 2) is A[1] + A[2] = |4 + (−3)| = 1.
The abs sum of two for the pair (2, 2) is A[2] + A[2] = |(−3) + (−3)| = 6.
Write a function:

int solution(int A[], int N);
that, given a non-empty zero-indexed array A consisting of N integers, returns the minimal abs sum of two for any pair of indices in this array.

For example, given the following array A:

  A[0] =  1
  A[1] =  4
  A[2] = -3
the function should return 1, as explained above.

Given array A:

  A[0] = -8
  A[1] =  4
  A[2] =  5
  A[3] =-10
  A[4] =  3
the function should return |(−8) + 5| = 3.

Assume that:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000,000..1,000,000,000].
Complexity:

expected worst-case time complexity is O(N*log(N));
expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
Elements of input arrays can be modified.
*/
