function solution(input) {
  var N = +input.split('\n')[0].split(' ')[0]
  var K = +input.split('\n')[0].split(' ')[1]
  var A = input.split('\n')[1].split(' ')
  for (var a = 0; a < A.length; a++) A[a] = +A[a]

  var count = 0
  var page = 0

  for (var i = 0; i < A.length; i++) {
    page++
    var p

    for (var j = 1; j <= A[i]; j++) {
      p = Math.ceil(j/K) - 1
      if (page+p === j) count++
    }

    page += p
  }

  console.log(count)
}

module.exports = solution

/*
isa just got a new math workbook. A workbook contains exercise problems, grouped into chapters.

There are  chapters in Lisa's workbook, numbered from  to .
The -th chapter has  problems, numbered from  to .
Each page can hold up to  problems. There are no empty pages or unnecessary spaces, so only the last page of a chapter may contain fewer than  problems.
Each new chapter starts on a new page, so a page will never contain problems from more than one chapter.
The page number indexing starts at .
Lisa believes a problem to be special if its index (within a chapter) is the same as the page number where it's located. Given the details for Lisa's workbook, can you count its number of special problems?

Note: See the diagram in the Explanation section for more details.

Input Format

The first line contains two integers  and  — the number of chapters and the maximum number of problems per page respectively.
The second line contains  integers , where  denotes the number of problems in the -th chapter.
*/