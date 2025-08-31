function timeAfter15Minutes (input) {
  let hours = Number(input[0]);
  let min = Number(input[1]);
  let extraMin = 15;

  // we calculate everything to minets here
  let time = hours * 60 + min + extraMin; 

  // we pre-calculate everything back to hours and minutes separetly 
  let h = Math.floor(time / 60);
  let m = time % 60;

  if (h > 23) {
    h = h - 24;
  } else {
    return h;
  }
  
  // we set up a condition to either to have or haven't a following 0 (null) in front of the minutes
  if (m >= 10) {
    console.log(`${h}:${m}`);
  } else {
    console.log(`${h}:0${m}`);
  }
  
}
timeAfter15Minutes(["23","59"]);

let DateToday = new Date();
console.log(DateToday);