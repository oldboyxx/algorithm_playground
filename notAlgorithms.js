// ugly curry-ish sum

function sum() {
  var ret = arguments[0]

  for (var i = 1; i < arguments.length; i++) {
    ret += arguments[i]
  }

  return function next(x) {
    if (x === 'end') return ret

    var more = arguments[0]

    for (var j = 1; j < arguments.length; j++) {
      more += arguments[j]
    }

    ret += more
    return next
  }
}

console.log(sum(1, 2, 2)(5, 5, 5)(15, 20)('end'))