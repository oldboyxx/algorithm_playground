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

/*
Little Bob loves chocolate, and he goes to a store with  in his pocket. The price of each chocolate is . The store offers a discount: for every  wrappers he gives to the store, he gets one chocolate for free. How many chocolates does Bob get to eat?

Input Format:
The first line contains the number of test cases, .
 lines follow, each of which contains three integers, , , and .

Output Format:
Print the total number of chocolates Bob eats.
*/