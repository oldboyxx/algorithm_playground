function getPrimes(N) {
  var i, p = 1
  var range = []
  for (i = 0; i <= N; i++) range.push(true)

  while (p*p <= N) {
    if (!range[++p]) continue;
    for (i = p*p; i <= N; i += p) range[i] = false
  }

  var primes = []
  for (i = 2; i <= N; i++) {
    if (range[i]) {
      var str = i.toString()
      if (str.indexOf('0') < 0) primes.push(str)
    }
  }

  return primes
}

function getRotations(num) {
  var results = [num]
  for (var i = 1; i < num.length; i++) {
    var temp = num
    num = num.slice(1) + temp[0]
    results.push(num)
  }
  return results
}

function solution(str) {
  var primes = getPrimes(+(str+'0')-1)
  var len = primes.length
  var primesObj = {}
  var i, j
  for (i = 0; i < len; i++) primesObj[primes[i]] = true

  var count = 0

  var N = +str-1
  for (i = 0; i < len; i++) {
    if (primes[i] > N) break;
    var rotations = getRotations(primes[i])
    var areCircular = true

    for (j = 0; j < rotations.length; j++) {
      if (!primesObj[rotations[j]]) areCircular = false
    }

    if (areCircular) count++
  }

  console.log(count)
}

/*solution("BMC_TEST_INPUT_MAGIC")*/

module.exports = solution












































