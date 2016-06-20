function solution(input) {
  input = input.split('\n').slice(1)
  var A = [], i
  for (i = 0; i < input.length; i++) {
    A.push([+input[i].split(' ')[0], +input[i].split(' ')[1]])
  }

  var sums = []
  for (i = 0; i < A.length; i++) {
    sums.push({ index: i, sum: A[i][0] + A[i][1] })
  }

  sums.sort((a, b) => a.sum - b.sum)

  var ret = sums[0].index+1
  for (i = 1; i < sums.length; i++) {
    var x = sums[i].index+1
    ret += (' '+x)
  }
  console.log(ret)
}

module.exports = solution
