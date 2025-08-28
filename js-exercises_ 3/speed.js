function speed (input) {
    let givenSpeed = Number(input[0]);

    if (givenSpeed <= 10 ) {
        console.log("slow");
    } else if (givenSpeed <= 50) {
        console.log("avarage");
    } else if (givenSpeed <= 150) {
        console.log("fast");
    } else if (givenSpeed <= 1000) {
        console.log("ulstra fast");
    } else{
        console.log("extremely fast");
    }
}
speed(["1159"]);