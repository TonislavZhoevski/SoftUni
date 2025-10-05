function commision (city, num){
    let com = 0.0;
    num = Number(num);

    switch (city) {
        case "Sofia": 
            if (num >= 0 && num <= 500){
                com = 0.05;
            } else if (num > 500 && num <= 1000){
                com = 0.07;
            } else if (num > 1000 && num <= 10000){
                com = 0.08;
            } else if (num > 1000) {
                com =  0.12;
            }
            console.log((com * num).toFixed(2));
            break;
        case "Varna": 
            if (num >= 0 && num <= 500){
                com = 0.045;
            } else if (num > 500 && num <= 1000){
                com = 0.075;
            } else if (num > 1000 && num <= 10000){
                com = 0.1;
            } else if (num > 1000) {
                com =  0.13;
            }
            console.log((com * num).toFixed(2));
            break;
        case "Plovdiv":
            if (num >= 0 && num <= 500 && num){
                com = 0.055;
            } else if (num > 500 && num <= 1000){
                com = 0.08;
            } else if (num > 1000 && num <= 10000){
                com = 0.12;
            } else if (num > 1000) {
                com =  0.145;
            }
            console.log((com * num).toFixed(2));
            break;
        default:
            console.log("error");
            break;
    }
}
commision("Ruse", "-50");

let a = 1;
let b = -3;
let res = a + b;
console.log(res);