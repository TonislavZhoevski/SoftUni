function pyramidNumbers(number) {
  let printLine = ''; 
  let isReached = false;  
  let currentNumber = 1;
  
  for (let row = 1; row <= number; row++) {
    for (let col = 1; col <= row; col++) {
      printLine += currentNumber + ' ';
      
      if (currentNumber === number) {
        isReached = true;
        break;
      }
      currentNumber++; 
    }

    console.log(printLine);  
    printLine = ''; 

    if (isReached) {
      break;
    } 
    
  }

}
pyramidNumbers(7);