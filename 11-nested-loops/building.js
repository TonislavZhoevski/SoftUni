function building (input) {
  
  let floor = Number(input[0]);
  let room = Number(input[1]);

  for (let a = floor; a > 0; a--) {

    let currentRow = "";

    for (let b = 0; b < room; b++) {
      if (a === floor) {
        currentRow += `L${a}${b} `;
      } else if (a % 2 === 0) {
        currentRow += `O${a}${b} `;
      } else {
        currentRow += `A${a}${b} `
      }
    }

    console.log(currentRow);

  }

}
building(["6", "4"]);