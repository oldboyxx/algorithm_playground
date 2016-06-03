var _ = require('lodash')
var expect = require('chai').expect
var perf = require("performance-now")
var solution = require('./classic/sorting/shell')

// FIDDLE

console.log(solution([-5, 14, 1, -50, 55, 0, -4, -1]))

// TESTS

if (typeof describe === 'undefined') return
describe('Algorithm', () => {

  it('is accurate', (done) => {

    var A = []
    for (var i = 0; i < 1000; i++) {
      A.push(i-500)
    }

    expect(solution([0])).to.deep.equal([0])
    expect(solution([1])).to.deep.equal([1])
    expect(solution([1, 1, 1])).to.deep.equal([1, 1, 1])
    expect(solution([-5, 14, 1, -50, 55, 0, -4, -1]))
     .to.deep.equal([-50, -5, -4, -1, 0, 1, 14, 55])
    expect(solution(_.shuffle(A))[0]).to.equal(-500)
    expect(solution(_.shuffle(A))[A.length-1]).to.equal(499)
    expect(solution(A)[0]).to.equal(-500)
    expect(solution(A)[A.length-1]).to.equal(499)
    expect(solution(_.reverse(A))[0]).to.equal(-500)
    expect(solution(_.reverse(A))[A.length-1]).to.equal(499)
    done()
  })

  it('is fast', (done) => {

    var A = []
    for (var i = 0; i < 100000; i++) {
      A.push(i-50000)
    }

    run([_.shuffle(A)], 1)

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
