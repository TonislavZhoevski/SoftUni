function shopping (budget, gpuCount, cpuCount, ramCount) {

    let gpuPriceForOneDevice = 250;  
    let gpuTotal = gpuPriceForOneDevice * gpuCount;
    // console.log(gpuPrice);
    
    let cpuPrice = gpuTotal * 0.35;
    let ramPrice = gpuTotal * 0.1;
    
    // let gpuTotal = gpuPrixce * gpuCount;
    let cpuTotal = cpuPrice * cpuCount;
    // console.log(cpuPrice);
    let ramTotal = ramPrice * ramCount;
    // console.log(ramPrice);

    let costs = (gpuTotal + cpuTotal + ramTotal) * 0.85;
    // console.log(costs);

    let diff = Math.abs(costs - budget).toFixed(2);

    if (budget > costs) {
        console.log(`You have ${diff} leva left!`);
    } else {
        console.log(`Not enough money! You need ${diff} leva more!`);
    }

}
shopping(900, 2, 1, 3);