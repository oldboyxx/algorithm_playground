function solution(A) {

  while (A.length) {
    var min = Math.min.apply(null, A)
    console.log(A.length)

    for (var i = A.length-1; i >= 0; i--) {
      A[i] -= min
      if (!A[i]) A.splice(i, 1)
    }
  }
}

module.exports = solution

/*
You are given  sticks, where the length of each stick is a positive integer. A cut operation is performed on the sticks such that all of them are reduced by the length of the smallest stick.

Suppose we have six sticks of the following lengths:
5 4 4 2 2 8

Then, in one cut operation we make a cut of length 2 from each of the six sticks. For the next cut operation four sticks are left (of non-zero length), whose lengths are the following:
3 2 2 6

The above step is repeated until no sticks are left.

Given the length of  sticks, print the number of sticks that are left before each subsequent cut operations.

Note: For each cut operation, you have to recalcuate the length of smallest sticks (excluding zero-length sticks).

Input Format
The first line contains a single integer .
The next line contains  integers: a0, a1,...aN-1 separated by space, where ai represents the length of ith stick.

Output Format
For each operation, print the number of sticks that are cut, on separate lines.
*/