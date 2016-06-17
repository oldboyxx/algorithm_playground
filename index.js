var _ = require('lodash')
var expect = require('chai').expect
var perf = require('performance-now')
var solution = require('./classic/random/getAllCombinations')
var solution = require('./beatmycode/digitSum')

// FIDDLE

console.log(solution('1000000'))

/*1
3
2
4
5*/

// TESTS

if (typeof describe === 'undefined') return
describe('Algorithm', () => {

  it('is accurate', (done) => {
    expect(solution([1, -2, 0, 9, -1, -2])).to.equal(8)
    expect(solution([1, 2])).to.equal(3)
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
