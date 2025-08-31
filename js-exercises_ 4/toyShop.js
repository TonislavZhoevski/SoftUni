function toyShop (input) {
  let price = Number(input[0]);
  let puzzleCount = Number(input[1]);
  let talkingDollCount = Number(input[2]);
  let bearCount = Number(input[3]);
  let minionsCount = Number(input[4]);
  let truck = Number(input[5]);

  let pricePuzzle = puzzleCount * 2.6;
  let priceDoll = talkingDollCount * 3.0;
  let priceBear = bearCount * 4.10;
  let priceMinions = minionsCount * 8.2;
  let priceTruck = truck * 2.00;

  let moneyFromToys = pricePuzzle + priceDoll + priceBear + priceMinions + priceTruck;
  let totalCountToys = puzzleCount + talkingDollCount + bearCount + minionsCount + truck;

  if (totalCountToys >= 50) {
    moneyFromToys = moneyFromToys * 0.75;
  }

  moneyFromToys = moneyFromToys * 0.90;

  if (moneyFromToys > price) {
    let diff = moneyFromToys - price; 
    console.log(`Yes! ${diff.toFixed(2)} lv left.`);
  } else {
    let diff = price - moneyFromToys;
    console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
  }

}

toyShop([
  "320",
  "8",
  "2",
  "5",
  "5",
  "1"
]);