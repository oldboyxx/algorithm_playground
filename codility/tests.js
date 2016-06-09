// oddOccurrencesInArray
describe('Algorithm', () => {

  it('is accurate', (done) => {
    var A = []
    for (var i = 1; i <= 100000; i++) {
      var val = i%2 === 0 ? i : i+1
      A.push(val)
      if (i === 100000) A.push(200001)
    }

    expect(solution([1])).to.equal(1)
    expect(solution([9,3,9,3,9,7,9])).to.equal(7)
    expect(solution([9,3,9,3,9,3,9])).to.equal(3)
    expect(solution(A.slice(0))).to.equal(200001)
    expect(solution(_.reverse(A.slice(0)))).to.equal(200001)
    expect(solution(_.shuffle(A.slice(0)))).to.equal(200001)
    done()
  })

  it('is fast', (done) => {
    var A = []
    for (var i = 0; i < 1000000; i++) {
      A.push(i-5000)
    }

    time([ _.reverse(A.slice(0)) ])
    time([ A.slice(0) ])

    done()
  })
})

// permMissingElem
describe('Algorithm', () => {

  it('is accurate', (done) => {
    expect(solution([])).to.equal(1)
    expect(solution([2])).to.equal(1)
    expect(solution([1])).to.equal(2)
    expect(solution([2, 3])).to.equal(1)
    expect(solution([1, 2])).to.equal(3)
    expect(solution([1, 2, 3, 4, 5])).to.equal(6)
    expect(solution([1, 2, 4, 5, 6])).to.equal(3)
    expect(solution([2, 3, 4, 5, 6])).to.equal(1)
    done()
  })

  it('is fast', (done) => {
    var A = []
    for (var i = 1; i < 100000; i++) {
      A.push(i)
    }

    time([ A.slice(0) ])
    time([ _.shuffle(A.slice(0)) ])

    done()
  })
})

// tapeEquilibrium
describe('Algorithm', () => {

  it('is accurate', (done) => {
    expect(solution([3, 1, 2, 4, 3])).to.equal(1)
    expect(solution([2, 3])).to.equal(1)
    expect(solution([-30, 3])).to.equal(33)
    expect(solution([-50, 1, 2])).to.equal(51)
    expect(solution([1, 2, 4, 5, 6])).to.equal(4)
    done()
  })

  it('is fast', (done) => {
    var A = []
    for (var i = 1; i < 100000; i++) A.push(i)

    time([ A.slice(0) ])
    time([ _.shuffle(A.slice(0)) ])
    time([ _.reverse(A.slice(0)) ])

    done()
  })
})

// frogRiverOne
describe('Algorithm', () => {

  it('is accurate', (done) => {
    expect(solution(1, [1])).to.equal(0)
    expect(solution(2, [2])).to.equal(-1)
    expect(solution(2, [1, 1, 1, 1, 2, 1, 1 ,1])).to.equal(4)
    expect(solution(2, [2, 2, 1])).to.equal(2)
    expect(solution(5, [2, 3, 4, 5])).to.equal(-1)
    expect(solution(6, [1, 2, 3, 4, 5, 6])).to.equal(5)
    done()
  })

  it('is fast', (done) => {
    var A = []
    var leafs = [1, 2, 3, 4, 5, 6]
    for (var i = 0; i < 100000; i++) {
      A.push(_.sample(leafs))
    }

    time([ 10, A.slice(0) ])
    time([ 6, _.shuffle(A.slice(0)) ])
    time([ 6, _.reverse(A.slice(0)) ])

    done()
  })
})

// maxCounters
describe('Algorithm', () => {

  it('is accurate', (done) => {
    expect(solution(1, [1])).to.deep.equal([1])
    expect(solution(2, [1, 2, 3])).to.deep.equal([1, 1])
    expect(solution(5, [3, 4, 4, 6, 1, 4, 4])).to.deep.equal([3, 2, 2, 4, 2])
    expect(solution(5, [1, 1, 1, 1, 1, 1, 1])).to.deep.equal([7, 0, 0, 0, 0])
    done()
  })

  it('is fast', (done) => {
    var A = []
    for (var j = 1; j <= 100000; j++) {
      A.push(_.random(0, 1) ? j : 100001)
    }

    time([ 100000, A.slice(0) ])
    time([ 100000, _.shuffle(A.slice(0)) ])
    time([ 100000, _.reverse(A.slice(0)) ])

    done()
  })
})

// missingInteger
describe('Algorithm', () => {

  it('is accurate', (done) => {
    expect(solution([1])).to.equal(2)
    expect(solution([1, 2, 3])).to.equal(4)
    expect(solution([3, 4, 4, 6, 1, 4, 4])).to.equal(2)
    expect(solution([3, 4, 4, 6, 1, 4, 4])).to.equal(2)
    expect(solution([1, 3, 6, 4, 1, 2])).to.equal(5)
    expect(solution([-2, 0])).to.equal(1)
    expect(solution([-2, -45])).to.equal(1)
    expect(solution([-2, -45, 0, 1, 2, 4])).to.equal(3)
    expect(solution([-2, -45, 0, 1, 2])).to.equal(3)
    done()
  })

  it('is fast', (done) => {
    var A = []
    for (var i = 1; i <= 100000; i++) {
      A.push(_.random(-434004330, 343434340))
    }

    time([ A.slice(0) ])
    time([ _.shuffle(A.slice(0)) ])
    time([ _.reverse(A.slice(0)) ])

    done()
  })
})

// permCheck
describe('Algorithm', () => {

  it('is accurate', (done) => {
    expect(solution([1])).to.equal(1)
    expect(solution([1, 2, 3])).to.equal(1)
    expect(solution([4, 1, 3, 2])).to.equal(1)
    expect(solution([4, 1, 3])).to.equal(0)
    expect(solution([1, 2, 3, 4, 5, 7])).to.equal(0)
    expect(solution([2])).to.equal(0)
    expect(solution([2, 3])).to.equal(0)
    expect(solution([1, 2, 3, 40])).to.equal(0)
    expect(solution([1, 2, 3, 40, 41, 42])).to.equal(0)
    done()
  })

  it('is fast', (done) => {
    var A = []
    for (var i = 1; i <= 100000; i++) {
      A.push(i)
    }

    time([ A.slice(0) ])
    time([ _.shuffle(A.slice(0)) ])
    time([ _.reverse(A.slice(0)) ])

    done()
  })
})

// countDiv
describe('Algorithm', () => {

  it('is accurate', (done) => {
    expect(solution(6, 11, 2)).to.equal(3)
    expect(solution(0, 1, 1)).to.equal(2)
    expect(solution(0, 0, 1)).to.equal(1)
    expect(solution(0, 9, 3)).to.equal(4)
    expect(solution(1, 9, 3)).to.equal(3)
    expect(solution(1, 10, 1)).to.equal(10)
    expect(solution(1, 350, 7)).to.equal(50)
    expect(solution(0, 350, 20000000)).to.equal(1)
    expect(solution(1, 350, 20000000)).to.equal(0)
    done()
  })
})

// passingCars
describe('Algorithm', () => {

  it('is accurate', (done) => {
    expect(solution([1])).to.equal(0)
    expect(solution([0])).to.equal(0)
    expect(solution([1, 1])).to.equal(0)
    expect(solution([0, 0])).to.equal(0)
    expect(solution([1, 1, 1, 0])).to.equal(0)
    expect(solution([1, 1, 0, 1])).to.equal(1)
    expect(solution([0, 1, 0, 1, 1])).to.equal(5)
    expect(solution([0, 1, 0, 1, 1])).to.equal(5)
    expect(solution([0, 1, 0, 1, 1, 1])).to.equal(7)
    expect(solution([1, 1, 0, 1, 1, 1])).to.equal(3)
    done()
  })

  it('is fast', (done) => {
    var A = []
    for (var i = 1; i <= 100000; i++) {
      A.push(_.random(0, 1))
    }

    time([ A.slice(0) ])

    done()
  })
})

// genomicRangeQuery
describe('Algorithm', () => {

  it('is accurate', (done) => {
    expect(solution('CAGCCTA', [2, 5, 0], [4, 5, 6])).to.deep.equal([2, 4, 1])
    expect(solution('A', [0], [0])).to.deep.equal([1])
    expect(solution('AACCGGTT', [0, 2, 4, 6], [1, 3, 5, 7])).to.deep.equal([1, 2, 3, 4])
    done()
  })

  it('is fast', (done) => {
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
  })
})

// arrSplitSameDiff
describe('Algorithm', () => {

  it('is accurate', (done) => {
    expect(solution(5, [5, 5, 1, 7, 2, 3, 5])).to.equal(4)
    expect(solution(5, [5, 5, 3, 4])).to.equal(2)
    expect(solution(2, [2])).to.equal(0)
    done()
  })
})

// minAvgTwoSlice
describe('Algorithm', () => {

  it('is accurate', (done) => {
    expect(solution([4, 2, 2, 5, 1, 5, 8])).to.equal(1)
    expect(solution([4, 2, 2, 5, 1, 5, 8, 0, 0, 10])).to.equal(7)
    expect(solution([5, 5, 3, 4])).to.equal(2)
    expect(solution([1, 2, 0, 0])).to.equal(2)
    expect(solution([-5, 10, 0, 1, 100, -50, 50])).to.equal(5)
    expect(solution([1, 2])).to.equal(0)
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

// triangle
describe('Algorithm', () => {

  it('is accurate', (done) => {
    expect(solution([10, 2, 5, 1, 8, 20])).to.equal(1)
    expect(solution([10, 2])).to.equal(0)
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

// numberOfDiscIntersections
describe('Algorithm', () => {

  it('is accurate', (done) => {
    expect(solution([])).to.equal(0)
    expect(solution([0, 1])).to.equal(1)
    expect(solution([0, 1, 2])).to.equal(3)
    expect(solution([0, 1, 2, 3, 4])).to.equal(10)
    expect(solution([1, 5, 2, 1, 4, 0])).to.equal(11)
    done()
  })

  it('is fast', (done) => {
    var A = []
    for (var i = 1; i <= 100000; i++) {
      A.push(_.random(0, 5))
    }

    time([A])

    done()
  })
})

// fish
describe('Algorithm', () => {

  it('is accurate', (done) => {
    expect(solution([0], [0])).to.equal(1)
    expect(solution([3, 4], [0, 1])).to.equal(2)
    expect(solution([3, 4], [1, 0])).to.equal(1)
    expect(solution([3, 4, 5, 6], [1, 1, 1, 1])).to.equal(4)
    expect(solution([3, 4, 5, 6], [0, 0, 0, 0])).to.equal(4)
    expect(solution([4, 3, 2, 1, 5], [0, 1, 0, 0, 0])).to.equal(2)
    expect(solution([10, 3, 2, 1, 5], [1, 0, 0, 0, 0])).to.equal(1)
    done()
  })

  it('is fast', (done) => {
    var A = []
    var B = []
    for (var i = 1; i <= 100000; i++) {
      A.push(_.random(0, 1000000000))
      B.push(_.random(0, 1))
    }

    time([A, B])

    done()
  })
})

// brackets
describe('Algorithm', () => {

  it('is accurate', (done) => {
    expect(solution('')).to.equal(1)
    expect(solution('{[()()]}')).to.equal(1)
    expect(solution('[)()]')).to.equal(0)
    expect(solution('[()](')).to.equal(0)
    expect(solution(')[()]')).to.equal(0)
    expect(solution('{([)()]}')).to.equal(0)
    expect(solution('{[(())]})')).to.equal(0)
    expect(solution('()()()()()')).to.equal(1)
    expect(solution('(((())))')).to.equal(1)
    done()
  })

  it('is fast', (done) => {
    var A = []
    var sample = ['(){}[]']
    for (var i = 1; i <= 200000; i++) A.push(_.sample(sample))

    var B = []
    for (var i = 1; i <= 100000; i++) B.push('(')
    for (var i = 1; i <= 100000; i++) B.push(')')

    time([A.join('')])
    time([B.join('')])

    done()
  })
})

// stoneWall
describe('Algorithm', () => {

  it('is accurate', (done) => {
    expect(solution([1])).to.equal(1)
    expect(solution([1, 2])).to.equal(2)
    expect(solution([3, 1, 3])).to.equal(3)
    expect(solution([2, 3, 2, 3])).to.equal(3)
    expect(solution([8, 8, 5, 7, 9, 8, 7, 4, 8])).to.equal(7)
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

// nesting
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

// equiLeader
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


