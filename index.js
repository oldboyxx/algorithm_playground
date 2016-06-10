var _ = require('lodash')
var expect = require('chai').expect
var perf = require('performance-now')
var solution = require('./codility/10_primeAndCompositeNumbers/minPerimiterRectangle')
var solution = require('./classic/random/numOfDivisors')

// FIDDLE

console.log(solution(12))

// TESTS

if (typeof describe === 'undefined') return
describe('Algorithm', () => {

  it('is accurate', (done) => {
    expect(solution([6])).to.equal(6)
    done()
  })

  it('is fast', (done) => {
    var A = []
    for (var i = 1; i <= 100000; i++) {
      A.push(i)
    }

    time([A])

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
