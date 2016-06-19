function solution(N, C, M) {
  var forCash = Math.floor(N / C)
  var count = forCash
  var wrappers = forCash

  while (wrappers >= M) {
    var extra = Math.floor(wrappers / M)
    count += extra
    wrappers -= extra*(M-1)
  }

  console.log(count)
}

module.exports = solution
