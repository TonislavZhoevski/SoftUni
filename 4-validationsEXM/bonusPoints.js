function bonusPoints (input) {
    let score = Number(input[0]);
    let bonus = 0.0;

    // Here we deffine the conditions to scoring
    if (score <= 100 ) {
        bonus = 5;
    } else if (score > 1000) {
        bonus = score * 0.1;
    } else if (score >100 && score < 1000) {
        bonus = score * 0.2;
    }

    // Here we give one  more condition depends on that if the given number is even or if it ends on 5. For that we give extra 1 or 2 points
    if (score % 2 === 0) {
        bonus += 1;
    } else if (score % 10 === 5) {
        bonus += 2;
    }

    console.log(bonus);
    console.log(score + bonus);
}
bonusPoints([
    "15875"
]);