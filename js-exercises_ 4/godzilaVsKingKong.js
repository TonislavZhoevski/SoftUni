function godzilaVsKingKong (input) {
    let budget = Number(input[0]);
    let extraStaff = Number(input[1]);
    let cloteOneStaffPrice = Number(input[2]);

    let decor = budget * 0.1;
    let discount = extraStaff * 0.9;

    let clotesTotalPriceDiscountNo = cloteOneStaffPrice * extraStaff;
    console.log(clotesTotalPriceDiscountNo);
    
    let clotesTotalPriceDiscountYes = clotesTotalPriceDiscountNo - discount;
    console.log(clotesTotalPriceDiscountYes);
    


    let finalPriceClotes = 0;
    if (extraStaff > 150) {
        finalPriceClotes = clotesTotalPriceDiscountYes;
    } else {
        finalPriceClotes = clotesTotalPriceDiscountNo;
    }

    let totalFinalPrice = decor + finalPriceClotes;

    let diff = Math.abs(totalFinalPrice - budget);

    if (totalFinalPrice > budget) {
        console.log(`Not enough money!\nWingard needs ${diff.toFixed(2)} leva more.`);
    } else {
        console.log(`Action!\nWingard starts filming with ${diff.toFixed(2)} leva left.`);
    }

}
godzilaVsKingKong([
    "20000",
    "120",
    "55.5"
]);