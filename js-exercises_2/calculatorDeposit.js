function calculatorDeposit (deposit, timeDeposit, yearInterestRate) {
    let sum = deposit + timeDeposit * ((deposit * yearInterestRate) / 12);
    console.log(sum);
    
}
calculatorDeposit(200, 3, 5.7);