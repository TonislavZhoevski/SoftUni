function worldSwimmingRecord (input) {
  let swimmingRecord = Number(input[0]);
  let distance = Number(input[1]);
  let timeInSecForOneM = Number(input[2]);

  let time = distance * timeInSecForOneM;
  let slow = Math.floor(distance / 15);
  let extraTime = slow * 12.5;
  let totalTime = time + extraTime;

  if (totalTime >= swimmingRecord) {
    let diff = totalTime - swimmingRecord;
    console.log(`No, he failed! He was ${diff.toFixed(2)} seconds swoler.`);
  } else {
    console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
  }

}
worldSwimmingRecord([
  "55555.67",
  "3017",
  "5.03"
]);