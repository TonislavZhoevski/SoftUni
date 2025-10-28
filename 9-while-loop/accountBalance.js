function accountBalance(input) {

  let total = 0;
  let index = 0;
  let currentRow = input[index];

  while (currentRow !== "NoMoreMoney") {
    let rowAsNumber = Number(currentRow);
    
    if (rowAsNumber < 0) {
      console.log(`Incalid operation!`);
      break;
    }

    total += rowAsNumber;
    console.log(`Increase: ${rowAsNumber.toFixed(2)}`);

    index++; // here we store always the index(key)
    currentRow = input[index]; // through that we store here always the value of that index(key)
  }
  console.log(`Total: ${total.toFixed(2)}`);
  

} 
// accountBalance(["5.51", "69.42", "100", "NoMoreMoney"]);
accountBalance(["120", "45.55", "-150"]);