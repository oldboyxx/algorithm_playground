// 100%
function solution(A) {
  var len = A.length
  var candidates = {}
  var max = 0
  var candidate

  for (var i = 0; i < len; i++) {
    candidates[A[i]] = candidates[A[i]] ? candidates[A[i]]+1 : 1

    if (candidates[A[i]] > max) {
      max = candidates[A[i]]
      candidate = A[i]
    }
  }

  var sums = {}
  var countLeft = 0
  var countRight = 0

  for (var i = 0; i < len-1; i++) {
    if (A[i] === candidate) countLeft++

    sums[i] = sums[i] || { prev: 0, next: 0}
    sums[i].prev = countLeft

    var j = len-i-2
    if (A[j+1] === candidate) countRight++

    sums[j] = sums[j] || { prev: 0, next: 0}
    sums[j].next = countRight
  }

  var eqLeaderCount = 0

  for (var k in sums) {
    k = +k
    if (sums[k].prev / (k+1) > 0.5 && sums[k].next / (len-k-1) > 0.5) {
      eqLeaderCount++
    }
  }

  return eqLeaderCount
}

module.exports = solution

/*
A non-empty zero-indexed array A consisting of N integers is given.

The leader of this array is the value that occurs in more than half of the elements of A.

An equi leader is an index S such that 0 ≤ S < N − 1 and two sequences A[0], A[1], ..., A[S] and A[S + 1], A[S + 2], ..., A[N − 1] have leaders of the same value.

For example, given array A such that:

    A[0] = 4
    A[1] = 3
    A[2] = 4
    A[3] = 4
    A[4] = 4
    A[5] = 2
we can find two equi leaders:

0, because sequences: (4) and (3, 4, 4, 4, 2) have the same leader, whose value is 4.
2, because sequences: (4, 3, 4) and (4, 4, 2) have the same leader, whose value is 4.
The goal is to count the number of equi leaders.

Write a function:

int solution(int A[], int N);
that, given a non-empty zero-indexed array A consisting of N integers, returns the number of equi leaders.

For example, given:

    A[0] = 4
    A[1] = 3
    A[2] = 4
    A[3] = 4
    A[4] = 4
    A[5] = 2
the function should return 2, as explained above.

Assume that:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000,000..1,000,000,000].
Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
Elements of input arrays can be modified.
*/
