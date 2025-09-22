function fishTank (l, w, h, percentOthers) {
    let totalVlQcm = l * w * h; // to volume in qcm
    let totalVlLt = totalVlQcm / 1000; // volume in liters

    let valueOthers = percentOthers / 100; // from  %-others tovalue-others

    // the rst of the percentahes, what it lefts for the water only
    let waterVl = totalVlLt * (1 - valueOthers);

    console.log(waterVl);
    

}
fishTank(105,77,89,18.5);