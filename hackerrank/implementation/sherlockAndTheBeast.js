function solution(N) {
  var fives = Math.floor(N/3) * 3
  var threes = N - fives

  while (fives) {
    if (threes % 5) {
      fives -= 3
      threes += 3
    } else {
      break;
    }
  }

  if (threes % 5) {
    console.log(-1)
  } else {
    console.log('5'.repeat(fives) + '3'.repeat(threes))
  }
}

module.exports = solution
