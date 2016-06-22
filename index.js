var _ = require('lodash')
var expect = require('chai').expect
var perf = require('performance-now')
var solution = require('./codility/02_arrays/oddOccurrencesInArray')
var solution = require('./current/solution2')

// FIDDLE

console.log(solution([1, 0, 0, 1, 1]))
console.log(solution([1, 0, 0, 1, 1, 1]))

// TESTS

if (typeof describe === 'undefined') return
describe('Algorithm', () => {

  it('is accurate', (done) => {
    expect(solution([1, 0, 0, 1, 1])).to.deep.equal([1, 1, 0, 1])
    expect(solution([1, 0, 0, 1, 1, 1])).to.deep.equal([1, 1, 0, 1, 0, 1, 1])
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
