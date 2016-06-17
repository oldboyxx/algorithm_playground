function solution(arr) {
  var perm = []
  var used = []
  return permute(arr, perm, used)
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

module.exports = solution
