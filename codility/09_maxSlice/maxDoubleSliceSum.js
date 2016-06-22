// 100% - NEED TO REWRITE
function solution(A) {
  var len = A.length
  var maxEnds = [], maxEnd = 0
  var maxBegins = [], maxBegin = 0

  for (var i = 0; i < len; i++) {
    maxEnds[i] = 0
    maxBegins[i] = 0
  }

  for (var i = 1; i < len-1; i++) {
    maxEnd = Math.max(0, A[i] + maxEnd)
    maxEnds[i] = maxEnd
  }

  for (var i = len-2; i >= 0; i--) {
    maxBegin = Math.max(0, A[i] + maxBegin)
    maxBegins[i] = maxBegin
  }

  var maxDoubleSlice = 0
  for (var i = 0; i < len-2; i++) {
    maxDoubleSlice = Math.max(maxDoubleSlice, maxEnds[i] + maxBegins[i+2])
  }

  return maxDoubleSlice
}

// 100% - NEED TO REWRITE
function solution(A) {
  var len = A.length
  var leftSums = [], rightSums = []

  for (var i = 0; i < len; i++) {
    leftSums[i] = 0
    rightSums[i] = 0
  }

  for (var i = 1; i < len-1; i++) {
    leftSums[i] = Math.max(leftSums[i-1] + A[i], 0)
  }

  for (var i = len-2; i > 0; i--) {
    rightSums[i] = Math.max(rightSums[i+1] + A[i], 0)
  }

  var max = 0
  for (var i = 1; i < len-1; i++) {
    max = Math.max(max, leftSums[i-1] + rightSums[i+1])
  }

  return max
}

module.exports = solution

/*
A non-empty zero-indexed array A consisting of N integers is given.

A triplet (X, Y, Z), such that 0 ≤ X < Y < Z < N, is called a double slice.

The sum of double slice (X, Y, Z) is the total of A[X + 1] + A[X + 2] + ... + A[Y − 1] + A[Y + 1] + A[Y + 2] + ... + A[Z − 1].

For example, array A such that:

    A[0] = 3
    A[1] = 2
    A[2] = 6
    A[3] = -1
    A[4] = 4
    A[5] = 5
    A[6] = -1
    A[7] = 2
contains the following example double slices:

double slice (0, 3, 6), sum is 2 + 6 + 4 + 5 = 17,
double slice (0, 3, 7), sum is 2 + 6 + 4 + 5 − 1 = 16,
double slice (3, 4, 5), sum is 0.
The goal is to find the maximal sum of any double slice.

Write a function:

int solution(int A[], int N);
that, given a non-empty zero-indexed array A consisting of N integers, returns the maximal sum of any double slice.

For example, given:

    A[0] = 3
    A[1] = 2
    A[2] = 6
    A[3] = -1
    A[4] = 4
    A[5] = 5
    A[6] = -1
    A[7] = 2
the function should return 17, because no double slice of array A has a sum of greater than 17.

Assume that:

N is an integer within the range [3..100,000];
each element of array A is an integer within the range [−10,000..10,000].
Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
Elements of input arrays can be modified.
*/
