function calculatorDeposit (deposit, timeDeposit, yearIntRatePercentage) {

    let yearIntRate = yearIntRatePercentage / 100;

    let sum = deposit + timeDeposit * ((deposit * yearIntRate) / 12);
    console.log(sum);
    
}
calculatorDeposit(2350, 6, 7);