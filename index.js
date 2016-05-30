var _ = require('lodash')
var solution = require('./codility/5_prefixSums/passingCars.js')

var N = 100000

arr = []
_.times(N, (i) => {
  arr.push(_.random(0, 1))
})

console.time("dur")
console.log(solution(arr))
console.timeEnd("dur")