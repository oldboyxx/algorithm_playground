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
