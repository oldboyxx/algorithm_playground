// 66%
function solution(A) {
  //UNIQUE IS SLOW!!!!!! // A.indexOf(n) === i)//UNIQUE IS SLOW!!!!!! // A.indexOf(n) === i)//UNIQUE IS SLOW!!!!!! // A.indexOf(n) === i)//UNIQUE IS SLOW!!!!!! // A.indexOf(n) === i)//UNIQUE IS SLOW!!!!!! // A.indexOf(n) === i)//UNIQUE IS SLOW!!!!!! // A.indexOf(n) === i)
  A = A.filter((n, i) => n > 0 && A.indexOf(n) === i)
  A.sort((a, b) => a - b)

  if (!A.length) return 1

  var curr = 1
  var result

  for (var i = 0; i < A.length; i++) {

    if (A[i] !== curr) {
      result = curr
      break;
    }

    curr++
  }

  return typeof result === 'undefined' ? A[A.length-1]+1 : result
}

module.exports = solution
