function solution(str) {
  var A = str.split(',')
  if (!A.length) { console.log(0); return; }
  var i, uniqCounts = {}

  for (i = 0; i < A.length; i++) uniqCounts[A[i]] = 0
  for (i = 0; i < A.length; i++) uniqCounts[A[i]]++

  var counts = []
  for (k in uniqCounts) counts.push(uniqCounts[k])

  if (counts.length !== 52) { console.log(0); return; }
  max = Math.min.apply(null, counts)

  console.log(max)
}

/*solution("BMC_TEST_INPUT_MAGIC")*/

module.exports = solution
