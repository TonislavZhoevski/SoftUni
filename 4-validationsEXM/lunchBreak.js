function lunchBreak (input) {
  let name = input[0];
  let duration = Number(input[1]);
  let breakTime = Number(input[2]); 

  let lunchTime = breakTime / 8;
  // console.log(lunchTime);
  
  let rest = breakTime / 4;
  // console.log(rest);
  
  let freeTime = breakTime - lunchTime - rest;
  // console.log(freeTime);
  
  
  let diff = Math.abs(freeTime - duration);
  if (freeTime >= duration) {
    console.log(`You have enough time to watch ${name} and left with ${Math.ceil(diff)} minutes free time.`);
  } else {
    console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(diff)} more minutes.`);
  }
}
/* lunchBreak([
  "Game of Thrones",
  "60",
  "96"
]); */
lunchBreak([
  "Teen Wolf",
  "48",
  "60"
]);