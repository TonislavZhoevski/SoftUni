function demo(input) {
  
  let budget = Number(input[0]);
  let index = 1; // help for the next array, couse we can increment/decrement it
  let product = input[index]; // it stores the value of 'index' through iterating the 'input' variable(array in this case).

  while (budget > 0) /* it is not 0 yet */  {
    
    switch (product) {
      case "meat": budget -= 30; break;
      case "coffee": budget -= 10; break;
      case "fruits": budget -= 20; break;
      case "milk": budget -= 5; break;
    }
    index++;
    product = input[index];

  }
  console.log(`Money left: ${budget}`);

}
demo(["100", "meat", "coffee", "fruits", "meat", "fruits", "milk"]);

// meet - 30 lv/kg
// coffee - 10 lv/kg
// fruits - 20 lv/kg
// milk - k lv/l