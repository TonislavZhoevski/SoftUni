function specialNumbersV2(input) {
  let n = Number(input[0]);
  let buff = "";

  // 1111 -> 9999
  for (let i = 1111; i <= 9999; i++) {
    let numAsString = String(i);

    let a = Number(numAsString[0]);
    let b = Number(numAsString[1]);
    let c = Number(numAsString[2]);
    let d = Number(numAsString[3]);

    if (n % a === 0 && n % b === 0 && n % c === 0 && n % d === 0) {
      buff += `${a}${b}${c}${d} `;
    }
  }

  console.log(buff);

}
specialNumbersV2(["3"]);