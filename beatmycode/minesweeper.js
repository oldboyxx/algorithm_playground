function solution(str) {
  var rows = str.split('\n')
  var i, j

  for (i = 0; i < rows.length; i++) {
    rows[i] = rows[i].split(' ')
    rows[i].unshift('O')
    rows[i].push('O')
  }

  rows.unshift([])
  rows.push([])
  for (i = 0; i < rows[1].length; i++) {
    rows[0].push('O')
    rows[rows.length-1].push('O')
  }

  var ret = ''
  for (i = 1; i < rows.length-1; i++) {
    var row = ''

    for (j = 1; j < rows[i].length-1; j++) {
      if (rows[i][j] === 'X') {
        var count = 'X'
      } else {
        var count = 0
        if (rows[i-1][j-1] === 'X') count++
        if (rows[i-1][j] === 'X') count++
        if (rows[i-1][j+1] === 'X') count++
        if (rows[i][j-1] === 'X') count++
        if (rows[i][j+1] === 'X') count++
        if (rows[i+1][j-1] === 'X') count++
        if (rows[i+1][j] === 'X') count++
        if (rows[i+1][j+1] === 'X') count++
      }
      row += j === rows[i].length-2 ? count : count+' '
    }
    ret += i === rows.length-2 ? row : row+'\n'
  }
  console.log(ret)
}

/*solution("BMC_TEST_INPUT_MAGIC")*/

module.exports = solution
