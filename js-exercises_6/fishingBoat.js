function fishingBoat(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let countFisherMan = Number(input[2]);

  rent = 0;

  if (season === "Spring") {
    rent = 3000;
    if (countFisherMan <= 6) {
      rent = rent * 0.9;
    } else if (countFisherMan >= 7 && countFisherMan <= 11) {
      rent = rent * 0.85;
    } else {
      rent = rent * 0.75;
    }
  } else if (season === "Summer" || season === "Autumn") {
    rent = 4200;
    if (countFisherMan <= 6) {
      rent = rent * 0.90;
    } else if (countFisherMan >= 7 && countFisherMan <= 11) {
      rent = rent * 0.85;
    } else {
      rent = rent * 0.75;
    }
  } else {
    rent = 2600;
        if (countFisherMan <= 6) {
      rent = rent * 0.90;
    } else if (countFisherMan >= 7 && countFisherMan <= 11) {
      rent = rent * 0.85;
    } else {
      rent = rent * 0.75;
    }
  }

  if (countFisherMan % 2 === 0 && season !== "Autumn") {
    rent = rent * 0.95;
  }

  let diff = Math.abs(budget - rent);

  if (budget >= rent) {
    console.log(`Yes! Yoi have ${diff.toFixed(2)} leva left.`);
  } else {
    console.log(`Not enough money! Yoe need ${diff.toFixed(2)} leva.`);
  }
}
fishingBoat(["3600", "Autumn", "6"]);