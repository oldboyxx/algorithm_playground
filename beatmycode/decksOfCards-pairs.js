function solution(str) {
  var A = str.split(',')
  if (!A.length) { console.log(0); return; }
  var i, uniqCounts = {}

  for (i = 0; i < A.length; i++) uniqCounts[A[i]] = 0
  for (i = 0; i < A.length; i++) uniqCounts[A[i]]++

  var counts = []
  for (k in uniqCounts) counts.push(uniqCounts[k])

  if (counts.length !== 52) { console.log(0); return; }
  max = Math.min.apply(null, counts)

  console.log(max)
}

/*solution("BMC_TEST_INPUT_MAGIC")*/

module.exports = solution

/*
In a casino all the playing cards got mixed up, and a lot of them got lost. You have to collect as many full decks as possible. A deck contains 52 cards, one for each rank and suit.

You get N mixed up French playing cards as your input.

You have to output the number of full decks.

The cards are of the following ranks:
2,3,4,5,6,7,8,9,T,J,Q,K,A

The four suits are:
Spade(♠), Club(♣), Heart(♥), and Diamond(♦)

The cards are given using their rank followed by their suit:

2 of Spades: 2S
Ace of Clubs: AC
10 of Hearts: TH

The "BMC_TEST_INPUT_MAGIC" (with quotes) in the code will be replaced with the actual value of the input. The input is in the format: "2S,AC,TH".
*/