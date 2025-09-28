function solve(input) {

  let startNum = Math.min(Number(input[0]), Number(input[1])); //200
  let endNum = Math.max(Number(input[0]), Number(input[1])); //100

  let sum = 0;

  for (let currentNum = startNum; currentNum <= endNum; currentNum++) {
    
    if (currentNum % 9 === 0) {
      sum += currentNum; // or sum = sum + currentNum; 
    }

  }

  console.log(`The sum: ${sum}`);

  for (let currentNum = startNum; currentNum <= endNum; currentNum++) {
    
    if (currentNum % 9 === 0) {
      console.log(currentNum);
    }

  }

}
solve(["200", "100"]);