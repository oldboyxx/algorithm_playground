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

/*
A number is called a circular prime if all of its rotations (rotations of their digits) are primes themselves.

For example the prime number 197 has two rotations: 971, and 719. Both of them are prime, so all of them are circular primes.

There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

How many circular primes are there below N if 1 <= N <= 1000000?

The "BMC_TEST_INPUT_MAGIC" (with quotes) in the code will be replaced with the actual value of the input.
*/