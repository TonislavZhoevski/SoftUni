function sumPrimeNonPrime(input) {
  let index = 0;

  let command = input[index];
  index++;

  let sumPrimeNumber = 0;
  let sumNonPrimeNumber = 0;

  while (command !== "stop") {
    let num = Number(command);

    if (num < 0) {
      console.log("Number is negative.");
      command = input[index];
      index++;
      continue;
    }

    if (num === 0 || num === 1) {
      sumNonPrimeNumber += num;
      command = input[index];
      index++;
      continue;
    }

    let isPrime = true;
    for (let x = 2; x < num; x++) {
      if (num % x === 0) {
        sumNonPrimeNumber += num;
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      sumPrimeNumber += num;
    }

    command = input[index];
    index++;
  }

  console.log(`Sum of all prime numbers is: ${sumPrimeNumber}`);
  console.log(`Sum of all prime numbers is: ${sumNonPrimeNumber}`);
}
/* sumPrimeNonPrime([
  "3",
  "9",
  "0",
  "7",
  "19",
  "4",
  "stop"
]); */

/* sumPrimeNonPrime([
  "30",
  "83",
  "33",
  "-1",
  "20",
  "stop"
]); */

sumPrimeNonPrime(["0", "-9", "0", "stop"]);