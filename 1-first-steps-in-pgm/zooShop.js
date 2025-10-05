function zooShop (dogFoodCount, catFoodCount) {
    let priceDogFood = dogFoodCount * 2.5;
    let priceCatFood = catFoodCount * 4;

    let res = priceDogFood + priceCatFood;

    console.log(`${res} lv.`);
    
}
zooShop(13,9);