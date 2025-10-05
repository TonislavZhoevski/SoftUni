function histogram(input) {
  let index = 0;
  let n = input[index];
  index++;
  
  for (let i = 0; i < n; i++) {
    console.log(input[index]);
    index++;
  }
  
}
histogram(["14", "53", "7", "56", "180", "450", "920", "12", "7", "150", "250", "680", "2", "600", "200"]);