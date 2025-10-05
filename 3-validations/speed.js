function speed (givenSpeed) {

    if (givenSpeed <= 10 ) {
        console.log("slow");
    } else if (givenSpeed <= 50) {
        console.log("average");
    } else if (givenSpeed <= 150) {
        console.log("fast");
    } else if (givenSpeed <= 1000) {
        console.log("ultra fast");
    } else{
        console.log("extremely fast");
    }
}
speed(1159);