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
