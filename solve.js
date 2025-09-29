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
  let percentWon

  console.log(avgPoints);

  // console.log(`Final points: ${}`);
  // console.log(`Avarage points: ${}`);
  // console.log(`${}%`);

}
solve(["5", "1400", "F", "SF", "W", "W", "SF"]);