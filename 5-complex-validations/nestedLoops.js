function solve (input) {
  let age = Number(input[0]);
  let gender = input[1];

  if (gender == 'f' && age < 16) {
    console.log("Miss");
  } else if (gender == 'f' && age >= 16) {
    console.log("Ms.");
  }


  // if (gender == 'f') {
  //   // console.log("Female");
  //   if (age < 16) {
  //     console.log("Miss");
  //   } else {
  //     console.log("Ms.");
  //   }
  // } else {
  //   // console.log("Male");
  //   if (age < 16) {
  //     console.log("Master");
  //   } else {
  //     console.log("Mr.");
  //   }
  // }
}
solve(["22", "f"]);
// solve(["12", "m"]);