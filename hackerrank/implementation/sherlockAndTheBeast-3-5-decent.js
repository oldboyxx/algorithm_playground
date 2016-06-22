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

/*
Sherlock Holmes suspects his archenemy, Professor Moriarty, is once again plotting something diabolical. Sherlock's companion, Dr. Watson, suggests Moriarty may be responsible for MI6's recent issues with their supercomputer, The Beast.

Shortly after resolving to investigate, Sherlock receives a note from Moriarty boasting about infecting The Beast with a virus; however, he also gives him a clue—a number, . Sherlock determines the key to removing the virus is to find the largest Decent Number having  digits.

A Decent Number has the following properties:

Its digits can only be 3's and/or 5's.
The number of 3's it contains is divisible by 5.
The number of 5's it contains is divisible by 3.
If there are more than one such number, we pick the largest one.
Moriarty's virus shows a clock counting down to The Beast's destruction, and time is running out fast. Your task is to help Sherlock find the key before The Beast is destroyed!
*/