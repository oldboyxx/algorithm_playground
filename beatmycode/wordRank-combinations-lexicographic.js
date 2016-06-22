function solution(str) {
  var perm = []
  var used = []
  var arr = permute(str.split(''), perm, used)

  for (var i = 0; i < arr.length; i++) arr[i] = arr[i].join('')
  arr.sort()
  console.log(arr.indexOf(str)+1)
}

function permute(arr, perm, used) {

  for (var i = 0; i < arr.length; i++) {
    var ch = arr.splice(i, 1)[0]
    used.push(ch)

    if (arr.length == 0) {
      perm.push(used.slice(0))
    }

    permute(arr, perm, used)
    arr.splice(i, 0, ch)
    used.pop()
  }

  return perm
}

/*solution("BMC_TEST_INPUT_MAGIC")*/

module.exports = solution

/*
You are given a word as input: "WORD"

If we generate a list of all “words” (including duplicates) made up of the letters in "WORD" (in this case W, O, R and D), in lexicographic order starting with DORW and ending with WROD, what position in the list will be occupied by the word "WORD"? If the word occurs more than once, the first position should be returned.

The "BMC_TEST_INPUT_MAGIC" (with quotes) in the code will be replaced with the actual value of the input.

Example input: TURING
Example output: 598
*/