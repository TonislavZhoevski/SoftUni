function schoolSupplies (pensCount, markersCont, cleanAllLiters, discountPercentage) {
    let pensPrice = 5.8;
    let markersPrice = 7.2;
    let cleanForOneLiter = 1.20;
    
    let totalPrice = pensCount * pensPrice + markersCont * markersPrice + cleanForOneLiter * cleanAllLiters;
    
    let discount = totalPrice * (discountPercentage / 100);

    let finalPrice = totalPrice - discount;
    
    console.log(finalPrice);
    
}
schoolSupplies(4, 2, 5, 13);