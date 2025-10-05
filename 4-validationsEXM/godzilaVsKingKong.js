function godzilaVsKingKong (input) {
    let budget = Number(input[0]);
    let extraStaff = Number(input[1]);
    let cloteOneStaffPrice = Number(input[2]);

    let decor = budget * 0.1;
    // console.log(decor);

    let clotesFinalPrice = extraStaff * cloteOneStaffPrice;

    if ( extraStaff > 150) {
        clotesFinalPrice = clotesFinalPrice * 0.9;
    }
    

    let totalPrice = decor + clotesFinalPrice;
    let diff = Math.abs(totalPrice - budget);
    if (totalPrice > budget) {
        console.log(`Not enough money!\nWingard needs ${diff.toFixed(2)} leva more.`);
    } else if (totalPrice <= budget) {
        console.log(`Action!\nWingard starts filming with ${diff.toFixed(2)} leva left.`);
    }

}
godzilaVsKingKong([
    "20000",
    "120",
    "55.5"
]);