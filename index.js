var _ = require('lodash')
var expect = require('chai').expect
var perf = require('performance-now')
var solution = require('./codility/7_stacksAndQueues/nesting')

// FIDDLE

console.log(solution('()()')) // 1

// TESTS

if (typeof describe === 'undefined') return
describe('Algorithm', () => {

  it('is accurate', (done) => {
    expect(solution('')).to.equal(1)
    expect(solution('()()')).to.equal(1)
    expect(solution('()(')).to.equal(0)
    expect(solution(')()')).to.equal(0)
    expect(solution('((()')).to.equal(0)
    expect(solution('()())')).to.equal(0)
    expect(solution(')((())')).to.equal(0)
    expect(solution(')(')).to.equal(0)
    expect(solution('())(()')).to.equal(0)
    expect(solution('())(')).to.equal(0)
    expect(solution('(((())))')).to.equal(1)
    done()
  })

  it('is fast', (done) => {
    var A = []
    var sample = ['()']
    for (var i = 1; i <= 200000; i++) A.push(_.sample(sample))

    var B = []
    for (var i = 1; i <= 100000; i++) B.push('(')
    for (var i = 1; i <= 100000; i++) B.push(')')

    time([A.join('')])
    time([B.join('')])

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
