var _ = require('lodash')
var expect = require('chai').expect
var perf = require('performance-now')
var solution = require('./codility/8_leader/equiLeader')

// FIDDLE

console.log(solution([1, 1])) // 1

// TESTS

if (typeof describe === 'undefined') return
describe('Algorithm', () => {

  it('is accurate', (done) => {
    expect(solution([4, 3, 4, 4, 4, 2])).to.equal(2)
    expect(solution([1, 1])).to.equal(1)
    expect(solution([-50, 1])).to.equal(0)
    expect(solution([2, 1, 5])).to.equal(0)
    expect(solution([1, 1, 1, 1, 1])).to.equal(4)
    expect(solution([1])).to.equal(0)
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
