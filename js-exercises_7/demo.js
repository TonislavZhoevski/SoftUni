function forLoop(input) {

  let start = Number(input[0]);
  let end = Number(input[1]);

  for (let a = start; a <= end; a += 2) {
    console.log(a);
  }
}
forLoop(["2", "12"]);