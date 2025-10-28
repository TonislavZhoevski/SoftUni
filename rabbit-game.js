// this is related to the file 'rabbit_game_js_programming'
function nestedLoops() {

  let points = 0;

  for (let row = 1; row <= 3; row++) {
    for (let col = 1; col <= 5; col++) {

      if (row === 1 && col === 5) {
        points += 10;
      } else if (row === 2 && col === 2) {
        points += 10;
      } else if (row === 2 && col === 4) {
        break;
      } else if (row === 3 && col === 3) {
        continue;
      } else {
        points++;
      }
    }
  }

  console.log(`Points: ${points}`);

}
nestedLoops();