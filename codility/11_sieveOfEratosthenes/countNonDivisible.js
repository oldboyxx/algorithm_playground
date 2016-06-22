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

/*
You are given a non-empty zero-indexed array A consisting of N integers.

For each number A[i] such that 0 ≤ i < N, we want to count the number of elements of the array that are not the divisors of A[i]. We say that these elements are non-divisors.

For example, consider integer N = 5 and array A such that:

    A[0] = 3
    A[1] = 1
    A[2] = 2
    A[3] = 3
    A[4] = 6
For the following elements:

A[0] = 3, the non-divisors are: 2, 6,
A[1] = 1, the non-divisors are: 3, 2, 3, 6,
A[2] = 2, the non-divisors are: 3, 3, 6,
A[3] = 3, the non-divisors are: 2, 6,
A[4] = 6, there aren't any non-divisors.
Assume that the following declarations are given:

struct Results {
  int * C;
  int L;
};
Write a function:

struct Results solution(int A[], int N);
that, given a non-empty zero-indexed array A consisting of N integers, returns a sequence of integers representing the amount of non-divisors.

The sequence should be returned as:

a structure Results (in C), or
a vector of integers (in C++), or
a record Results (in Pascal), or
an array of integers (in any other programming language).
For example, given:

    A[0] = 3
    A[1] = 1
    A[2] = 2
    A[3] = 3
    A[4] = 6
the function should return [2, 4, 3, 2, 0], as explained above.

Assume that:

N is an integer within the range [1..50,000];
each element of array A is an integer within the range [1..2 * N].
Complexity:

expected worst-case time complexity is O(N*log(N));
expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
Elements of input arrays can be modified.
*/