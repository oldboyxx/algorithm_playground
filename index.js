var _ = require('lodash')
var expect = require('chai').expect
var perf = require('performance-now')
var solution = require('./current')

// FIDDLE

console.log(solution(5, [5, 5, 1, 7, 2, 3, 5])) // 4

// TESTS

if (typeof describe === 'undefined') return
describe('Algorithm', () => {

  it('is accurate', (done) => {
    expect(solution(5, [5, 5, 1, 7, 2, 3, 5])).to.equal(4)
    expect(solution(5, [5, 5, 3, 4])).to.equal(2)
    expect(solution(2, [2])).to.equal(0)
    done()
  })

  /*it('is fast', (done) => {
    var S = []
    var factors = ['A', 'C', 'G', 'T']
    for (var i = 1; i <= 100000; i++) {
      S.push(_.sample(factors))
    }
    S = S.join('')

    var P = []
    var Q = []
    for (var i = 1; i <= 50000; i++) {
      P.push(_.random(1, 25000))
      Q.push(_.random(25001, 50000))
    }

    time([S, P, Q])

    done()
  })*/
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
