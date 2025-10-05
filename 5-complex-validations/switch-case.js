function solve (input) {
  const dayOfWeek = input[0];

  switch (dayOfWeek) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thirsday":
    case "Friday":
      console.log("Working day");
      break;
    case "Saturday":
    case "Sunday":
      console.log("Weekend");
      break;
    default:
      console.log("Error");
  }
}

solve(["Monday"]);
solve(["Wednesday"]);
solve(["Sunday"]);
solve(["bananas"]);