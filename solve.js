// function solve (input) {
// }
// solve(["0"]);

// let a = 50;
// let b = 200;
// let c = 300;

// if ((a >= 100 && b <= 200) || (c + b >= 300 && c <= 400)) {
//   console.log("Yes"); // Yes
// }

// if (a >= 100 && (b <= 200 || c + b >= 300) && c <= 400) {
//   console.log("Yes"); // No output
// }

let result = "2:3:4";

let input = result.split(":");

console.log(input);

const first = Number(input[0]);
const second = Number(input[1]);
const third = Number(input[2]);

console.log(first + second + third);

