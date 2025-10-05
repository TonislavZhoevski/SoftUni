function foodDelivery (chickenMenuCount, fishMenuCount, veganMenuCount) {

    let chickenMenuPrice = 10.35;
    let fishMenuPrice = 12.40;
    let veganMenuPrice = 8.15;

    let totalMenuPrice = (chickenMenuCount * chickenMenuPrice) + (fishMenuCount * fishMenuPrice) + (veganMenuCount * veganMenuPrice);

    let desert = totalMenuPrice * 0.2;

    let deliveryPrice = 2.50;

    let totalSum = totalMenuPrice + desert +deliveryPrice;

    console.log(`${totalSum}`);
    
}
foodDelivery(2,4,3);