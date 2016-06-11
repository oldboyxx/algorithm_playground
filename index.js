var _ = require('lodash')
var expect = require('chai').expect
var perf = require('performance-now')
var solution = require('./codility/12_euclideanAlgorithm/commonPrimeDivisors')
var solution = require('./classic/random/getFibonacciSequence')

// FIDDLE

console.log(solution(10))

// TESTS

if (typeof describe === 'undefined') return
describe('Algorithm', () => {

  it('is accurate', (done) => {
    expect(solution([2, 3, 4], [2, 3, 5])).to.equal(2)
    expect(solution([15, 10, 3], [75, 30, 5])).to.equal(1)
    done()
  })

  it('is fast', (done) => {
    var A = []
    var B = []
    for (var i = 1; i <= 6000; i++) {
      A.push(2147483647)
      B.push(2147483647)
    }

    time([A, B])
    done()
  })
})


















// UTILS

function time(args) {
  var start = perf()
  solution.apply(this, args)
  var end = perf()-start
  console.log('time: '+end)
}

function expectTime(args, limit) {
  var start = perf()
  solution.apply(this, args)
  var end = perf()-start
  expect(end).to.be.below(limit||100)
}
