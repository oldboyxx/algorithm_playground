var _ = require('lodash')
var expect = require('chai').expect
var perf = require("performance-now")
var solution = require('./codility/6_sorting/triangle.js')

// FIDDLE

console.log(solution([1, 2, 1, 3, 3, 4, 5, 4]))

// TESTS

if (typeof describe === 'undefined') return
describe('Algorithm', () => {

  it('is accurate', (done) => {
    expect(solution([1, 1, 1])).to.equal(1)
    done()
  })

  it('is fast', (done) => {
    var arr = []
    for (var i = 0; i < 100000; i++) {
      arr.push(i-50000)
    }

    run([arr], 1)

    done()
  })
})














// UTILS

function run(args, limit) {
  start = perf()
  solution.apply(this, args)
  expect(perf()-start).to.be.below(limit||100)
}
