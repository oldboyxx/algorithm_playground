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
