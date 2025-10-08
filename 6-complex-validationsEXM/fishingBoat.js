function fishingBoat(budget, season, countFisherMan) {
  let rent = 0;
  // -------------
  if (season === "Spring") {
    rent = 3000;
  } else if (season === "Summer" || season === "Autumn") {
    rent = 4200;
  } else {
    rent = 2600;
  }

  // --------------
  if (countFisherMan <= 6) {
    rent = rent * 0.90;
  } else if (countFisherMan >= 7 && countFisherMan <= 11) {
    rent = rent * 0.85;
  } else {
    rent = rent * 0.75;
  }

  //-----------------
  if (countFisherMan % 2 === 0 && season !== "Autumn") {
    rent = rent * 0.95;
  }

  let diff = Math.abs(budget - rent).toFixed(2);

  if (budget >= rent) {
    console.log(`Yes! You have ${diff} leva left.`);
  } else {
    console.log(`Not enough money! You need ${diffr} leva.`);
  }
}
fishingBoat(2000, "Winter", 13);