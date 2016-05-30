var solution = require('./codility/4_countingElements/missingInteger.js')

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var arr = []
for (var i = 0; i < 100000; i++) {
    arr.push(i-64534)
}
arr = shuffle(arr)

console.time("ha")
console.log(solution(arr))
console.timeEnd("ha")
