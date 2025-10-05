function cinema (type, rowsCount, columnsCount) {
    let ticket = 0;

    if (type === "Premiere") {
        ticket = 12.00;
    } else if (type === "Normal") {
        ticket = 7.50;
    } else if (type === "Discount") {
        ticket = 5.00;
    }

    let income = rowsCount * columnsCount * ticket;

    console.log(`${income.toFixed(2)} leva`);
    
}
cinema("Discount", 12, 30);