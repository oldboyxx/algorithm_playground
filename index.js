var _ = require('lodash')
var expect = require('chai').expect
var perf = require('performance-now')
var solution = require('./classic/random/getFibonacciNum')
var solution = require('./codility/15_caterpillarMethod/countTriangles')

// FIDDLE

console.log(solution([-5, -3, -1, 0, 3, 6])) // 5

// TESTS

if (typeof describe === 'undefined') return
describe('Algorithm', () => {

  it('is accurate', (done) => {
    expect(solution([-5, -3, -1, 0, 3, 6])).to.equal(5)
    expect(solution([1])).to.equal(1)
    expect(solution([1, -1, 1, -1])).to.equal(1)
    expect(solution([1, -1, 1, -1, -2])).to.equal(2)
    done()
  })

  it('is fast', (done) => {
    var A = []
    for (var i = 1; i <= 100000; i++) {
      A.push(_.random(-2000000000, 2000000000))
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
