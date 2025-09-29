function solve(input) {

  let tournaments = Number(input[0]);
  let startingPoints = Number(input[1]);
  let winPoints = 0;
  let wins = 0;

  for (let i = 2; i < input.length; i++) {

    let score = input[i];

    switch (score) {
      case "W": winPoints += 2000;
        wins++;
        break;
      case "F": winPoints += 1200;
        break;
      case "SF": winPoints += 720;
        break;
    }
  }

  let avgPoints = winPoints / tournaments;
  let percentWonTournaments = (wins / tournaments) * 100;
  let finalPoints = startingPoints + winPoints;

  console.log(`Final points: ${finalPoints}`);
  console.log(`Avarage points: ${Math.floor(avgPoints)}`);
  console.log(`${percentWonTournaments.toFixed(2)}%`);

}
solve(["5", "1400", "F", "SF", "W", "W", "SF"]);