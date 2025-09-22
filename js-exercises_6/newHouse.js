function newHouse(input) {
  let type = input[0]; // "Roses", "Dahlias", "Narcissus", "Gladiolus"
  let count = Number(input[1]);
  let budget = Number(input[2]);

  let money = 0;

  switch (type) {
    case "Roses":
      money = count * 5.00;
      if (count > 80) {
        money = money * 0.90;
      }
      break;
    case "Dahlias":
      money = count * 3.80;
      if (count > 90) {
        money = money * 0.85;
      }
      break;
    case "Tulips":
      money = count * 2.80;
      if (count > 80) {
        money = money * 0.85;
      }
      break;
    case "Narcissus":
      money = count * 3.00;
      if (count < 120) {
        money = money * 1.15;
      }
      break;
    case "Gladiolus":
      money = count * 2.50;
      if (count < 80) {
        money = money * 1.20;
      }
      break;
  }

  let diff = Math.abs(money - budget);
  
  if (money <= budget) {
    console.log(`Hey, you have a great garden with ${count} ${type} and ${diff.toFixed(2)} leva more!`);
  } else {
    console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
  }
}
newHouse(["Narcissus", "119", "360"]);