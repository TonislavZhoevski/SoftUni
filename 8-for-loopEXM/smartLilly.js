function smartLilly (age, priceWM, priceForOneToy) {

    // let birthday = 0;
    let years = 0;
    let savedMoney = 0;

    let evenBday = 0;
    let oddBday= 0;

    for (let birthdays = 1; birthdays <= age; birthdays++) {
        if (birthdays % 2 === 0) {
            evenBday = birthdays;
            savedMoney += 10;
        } else {
            oddBday = birthdays;
        }
    }
    console.log(savedMoney);
}
smartLilly(10, 170.00, 6);
