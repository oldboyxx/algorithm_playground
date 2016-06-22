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

/*
In Jim's Burger,  hungry burger fans are ordering burgers. The th order is placed by the th fan at  time and it takes  time to process. What is the order in which the fans will get their burgers?

Input Format
On the first line you will get , the number of orders. Then  lines will follow. On the th line, you will get and  separated by a single space.

Output Format
Print the order ( as single space separated integers ) in which the burger fans get their burgers. If two fans get the burger at the same time, then print the smallest numbered order first.(remember, the fans are numbered 1 to ).
*/