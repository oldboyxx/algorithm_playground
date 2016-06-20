var _ = require('lodash')
var expect = require('chai').expect
var perf = require('performance-now')
var solution = require('./hackerrank/graphTheory/breadthFirstSearchShortestReach')

// FIDDLE

solution('2\n4 2\n1 2\n1 3\n1\n3 1\n2 3\n2')



// TESTS

if (typeof describe === 'undefined') return
describe('Algorithm', () => {

  it('is accurate', (done) => {
    expect(solution([])).to.equal(0)
    expect(solution([1])).to.equal(0)
    expect(solution([-1, 6, 3, 4, 7, 4])).to.equal(4)
    expect(solution([1, 2, 3, 4, 5])).to.equal(0)
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
