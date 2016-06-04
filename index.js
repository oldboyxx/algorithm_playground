var _ = require('lodash')
var expect = require('chai').expect
var perf = require("performance-now")
var solution = require('./classic/sorting/quick')

// FIDDLE

console.log(solution([-50, 1, -5, 14, 1, -50, 55, 0, -4, -1, 1, 1]))

// TESTS

if (typeof describe === 'undefined') return
describe('Algorithm', () => {

  it('is accurate', (done) => {
    var A = []
    for (var i = 0; i < 1000; i++) {
      A.push(i-_.random(495, 500))
    }

    expect(solution([])).to.deep.equal([])
    expect(solution([1])).to.deep.equal([1])
    expect(solution([0])).to.deep.equal([0])
    expect(solution([1, 0, 1, 0, 1, 0])).to.deep.equal([0, 0, 0, 1, 1, 1])
    expect(solution([1, 1, 1])).to.deep.equal([1, 1, 1])
    expect(solution([0, 1, 1])).to.deep.equal([0, 1, 1])
    expect(solution([-5, 14, 1, -50, 55, 0, 1, -5, -4, -1]))
     .to.deep.equal([-5, 14, 1, -50, 55, 0, 1, -5, -4, -1].sort((a,b) => a-b))
    expect(solution([-50, 1, -5, 14, 1, -50, 55, 0, -4, -1, 1, 1]))
     .to.deep.equal([-50, 1, -5, 14, 1, -50, 55, 0, -4, -1, 1, 1].sort((a,b) => a-b))
    expect(solution(_.shuffle(A))).to.deep.equal(A.sort((a,b) => a-b))
    expect(solution(A)).to.deep.equal(A.sort((a,b) => a-b))
    expect(solution(_.reverse(A))).to.deep.equal(A.sort((a,b) => a-b))
    done()
  })

  it('is fast', (done) => {
    var A = []
    for (var i = 0; i < 1000000; i++) {
      A.push(i-500000)
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
