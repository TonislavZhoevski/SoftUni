function demo (input) {
  let number = Number(input[0]);
  let isEvenNumber = number % 2 === 0;
  
  if (isEvenNumber) {
    console.log("even");
  } else {
    console.log("odd");
  }
}
demo(["12"]);