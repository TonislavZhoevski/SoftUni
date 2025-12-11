function pyramidNumbersV2(input) {
  let n = Number(input[0]);
  let numToPrint = 1;
  let isFinish = false;

  let row = 0;
  while (!isFinish) {
    let buff = "";
    for (let col = 0; col <= row; col++) {
      buff += numToPrint + " ";
      if (numToPrint === n) {
        isFinish = true;
        break;
      }
      numToPrint++;
    }
    row++;
    console.log(buff);
    
  }
}
pyramidNumbersV2(["15"]);