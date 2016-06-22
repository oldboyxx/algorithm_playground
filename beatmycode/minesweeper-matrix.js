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

/*
Calculate the number of mines in the surrounding cells for every cell in the field.

The "BMC_TEST_INPUT_MAGIC" (with quotes) in the code will be replaced with the actual value of the input.

Input format: Columns are separated by spaces, rows are separated by newlines ("\n"). "X" marks a mine, "O" marks a mine-free field.

Output format: "X" fields are to be left as they are. For every field containing "O", you are to calculate the number of mines surrounding that field.

Sample input:
O O O O X O O O O O
X X O O O O O O X O
O O O O O O O O O O
O O O O O O O O O O
O O O O O X O O O O

Sample output:
2 2 1 1 X 1 0 1 1 1
X X 1 1 1 1 0 1 X 1
2 2 1 0 0 0 0 1 1 1
0 0 0 0 1 1 1 0 0 0
0 0 0 0 1 X 1 0 0 0
*/
