function yardGreening (qm) {
    let priceForOneQm = 7.61;
    let totalPrice = qm * priceForOneQm;
    let discount = totalPrice * 0.18;
    let finalTotalPrice = totalPrice - discount;

    console.log(`The final price is: ${finalTotalPrice} lv.\nThe discount is: ${discount} lv.`);
    
}   
yardGreening(550);