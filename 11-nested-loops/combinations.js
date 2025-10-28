function nestedLoops(input) {
  
  let startInterval = Number(input[0]);
  let endInterval = Number(input[1]);
  let magicNumber = Number(input[2]);
  let combinationsCounter = 0;
  let isFoundValidCombination = false;

  for (let a = startInterval; a <= endInterval; a++) {
    for (let b = startInterval; b <= endInterval; b++) {
      
      combinationsCounter++;
      let sum = a + b;

      if (sum === magicNumber) {
        isFoundValidCombination = true;
        console.log(`Combination N:${combinationsCounter} (${a} + ${b} = ${sum})`);
        break;
      }
    }
    if (isFoundValidCombination) {
      break;
    }
  }
  
  if (isFoundValidCombination !== true) {
    console.log(`4 combinations - neither equals ${magicNumber}`);
  }

}
nestedLoops(["23", "24", "20"]);