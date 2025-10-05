function repainting (nylonCountQm, paintCountLiters, paintThinnerCountLiters, hoursWork) {
    let nylonPrice = 1.50;
    let paintPrice = 14.50;
    let paintThinnerPrice = 5.00;
    let backsPrice = 0.40;
    
    let nylonTotalQm = nylonCountQm + 2;
    let paintTotalLiters = paintCountLiters * 1.1;

    let materialsTotalPrice = (nylonPrice * nylonTotalQm + paintPrice * paintTotalLiters + paintThinnerPrice * paintThinnerCountLiters + backsPrice);

    let oneHourWorkPrice = materialsTotalPrice * 0.3;

    let totalSum = materialsTotalPrice + (hoursWork * oneHourWorkPrice);

    console.log(`${totalSum}`);
    
}
repainting(5, 10, 10, 1);