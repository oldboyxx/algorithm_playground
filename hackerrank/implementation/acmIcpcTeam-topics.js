function solution(N, M, A) {
  var maxForOneTeam = 0
  var maxTeams = 0

  for (var i = 0; i < N-1; i++) {
    for (var j = i+1; j < N; j++) {
      var topics = 0

      for (var k = 0; k < M; k++) {
        if (A[i][k] === '1' || A[j][k] === '1') topics++
      }

      if (topics > maxForOneTeam) {
        maxForOneTeam = topics
        maxTeams = 1
      } else if (topics === maxForOneTeam) {
        maxTeams++
      }
    }
  }

  console.log(maxForOneTeam)
  console.log(maxTeams)
}

module.exports = solution

/*
You are given a list of  people who are attending ACM-ICPC World Finals. Each of them are either well versed in a topic or they are not. Find out the maximum number of topics a 2-person team can know. And also find out how many teams can know that maximum number of topics.

Note Suppose a, b, and c are three different people, then (a,b) and (b,c) are counted as two different teams.

Input Format

The first line contains two integers,  and , separated by a single space, where  represents the number of people, and  represents the number of topics.  lines follow.
Each line contains a binary string of length . If the th line's th character is , then the th person knows the th topic; otherwise, he doesn't know the topic.

Constraints


Output Format

On the first line, print the maximum number of topics a 2-person team can know.
On the second line, print the number of 2-person teams that can know the maximum number of topics.
*/