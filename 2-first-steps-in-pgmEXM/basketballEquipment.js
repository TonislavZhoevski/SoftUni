function basketballEquipment (yearsTax) {
    let basketShoes = yearsTax * 0.6;
    let basketWear = basketShoes * 0.8;
    let basketBall = basketWear / 4;
    let basketAccessoars = basketBall / 5;

    let sum = yearsTax + basketShoes + basketWear + basketBall + basketAccessoars;

    console.log(sum);
    
}
basketballEquipment(550);