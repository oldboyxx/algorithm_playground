var _ = require('lodash')
var expect = require('chai').expect
var perf = require("performance-now")
var solution = require('./classic/search/binary')

// FIDDLE

console.log(solution([-1, 0, 1, 2, 3, 4, 5, 6], 0))

// TESTS

if (typeof describe === 'undefined') return
describe('Algorithm', () => {

  it('is accurate', (done) => {
    expect(solution([], 5)).to.equal(-1)
    expect(solution([1], 1)).to.equal(0)
    expect(solution([-50, -5, -4, 0, 1], 1)).to.equal(4)
    expect(solution([-1, 0, 1, 2, 3, 4, 5, 6], 0)).to.equal(1)
    done()
  })

  it('is fast', (done) => {
    var A = []
    for (var i = 0; i < 10000000; i++) {
      A.push(i-500000)
    }

    run([_.shuffle(A), 5000000], 0.00001)

    done()
  })
})














// UTILS

function run(args, limit) {
  var start = perf()
  solution.apply(this, args)
  var end = perf()-start
  expect(end).to.be.below(limit||100)
}
