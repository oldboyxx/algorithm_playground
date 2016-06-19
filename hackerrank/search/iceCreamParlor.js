function solution(input) {
  input = input.split('\n')
  for (var k = 1; k < input.length; k += 3) {
    var M = input[k]
    var A = input[k+2].split(' ')
    var len = A.length
    for (var i = 0; i < len; i++) A[i] = +A[i]

    var items = {}
    for (var i = 0; i < len; i++) {
      items[A[i]] = items[A[i]] || []
      items[A[i]].push(i)
    }

    for (var i = 0; i < len; i++) {
      var target = items[M-A[i]]

      if (target && (target[0] !== i || target[1] !== i)) {
        var first = i+1
        var second = target[0] === i ? target[1]+1 : target[0]+1
        break;
      }
    }

    console.log(first < second ? first+' '+second : second+' '+first)
  }
}

module.exports = solution
