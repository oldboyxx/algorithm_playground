function solution(input) {
  input = input.split('\n').slice(1)
  var k = 0
  while (k < input.length) {
    var N = +input[k].split(' ')[0]
    var M = +input[k].split(' ')[1]
    var nodes = input.slice(k+1, k+1+M)
    for (var v = 0; v < nodes.length; v++) {
      nodes[v] = nodes[v].split(' ')
      for (var p = 0; p < nodes[v].length; p++) {
        nodes[v][p] = +nodes[v][p]
      }
    }
    var S = +input[k+1+M]
    k += M+2
    // IGNORE ABOVE... what the actual fuck hackerrank?? disgusting.








  }
}

module.exports = solution

























































