function vacation(input) {
  let index = 0;
  let needMoney = Number(input[index]);
  index++;

  let money = Number(input[index]);
  index++;

  let spendDayCount = 0;
  let dayCount = 0;
  let isPossibleSaveMoney = true;

  while (money < needMoney) {
    dayCount++;
    let action = input[index];
    index++;
    let currentMoney = Number(input[index]);
    index++;

    switch (action) {
      case "spend":
        spendDayCount++;
        money -= currentMoney;
        if (money < 0) {
          money = 0;
        }
        break;
      case "save":
        spendDayCount = 0;
        money += currentMoney;
        break;
    }

    if (spendDayCount === 5) {
      isPossibleSaveMoney = false;
      console.log(`You can't save the money.`);
      console.log(`${dayCount}`);
      break;
    }
  }

  if (isPossibleSaveMoney) {
    console.log(`You saved the money for ${dayCount} days.`);
  }

}
/* vacation([
  "110",
  "60",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10"
]); */
vacation([
  "2000",
  "1000",
  "spend",
  "1200",
  "save",
  "2000"
]);