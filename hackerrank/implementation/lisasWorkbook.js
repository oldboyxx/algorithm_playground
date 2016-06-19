function solution(input) {
  var N = +input.split('\n')[0].split(' ')[0]
  var K = +input.split('\n')[0].split(' ')[1]
  var A = input.split('\n')[1].split(' ')
  for (var a = 0; a < A.length; a++) A[a] = +A[a]

  var count = 0
  var page = 0

  for (var i = 0; i < A.length; i++) {
    page++
    var p

    for (var j = 1; j <= A[i]; j++) {
      p = Math.ceil(j/K) - 1
      if (page+p === j) count++
    }

    page += p
  }

  console.log(count)
}

module.exports = solution
