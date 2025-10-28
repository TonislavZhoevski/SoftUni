function numbersSum(input) {
  
  let targetNum = Number(input[0]);
  let index = 1;
  let currentNum = Number(input[index]);
  let sum = 0;

  while (sum < targetNum) {
    sum += currentNum;
    index++;
    currentNum = Number(input[index]);
  }
  console.log(sum);

}
numbersSum(["100", "10", "20", "30", "40"]);