function demo(input) {
  
  let index = 0;
  let currentRow = input[index];
  let maxNumber = Number.MIN_VALUE;

  while (currentRow !== 'Stop') {
    let currentNumber = Number(currentRow);

    if (currentNumber < maxNumber) {
      maxNumber = currentNumber;
    }
  }

}
demo(["100", "99", "80", "70", "Stop"]);