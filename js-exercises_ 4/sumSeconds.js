function sumSeconds (input) {
  let timePlayerA = Number(input[0]);
  let timePlayerB = Number(input[1]);
  let timePlayerC = Number(input[2]);

  let sumSec = timePlayerA + timePlayerB + timePlayerC;
  let min = Math.floor(sumSec / 60);
  let sec = sumSec % 60;

  if (sec < 10) {
    console.log(`${min}:0${sec}`);
  } else {
    console.log(`${min}:${sec}`);
  }
  
}
sumSeconds([
  "50",
  "50",
  "49"
]);