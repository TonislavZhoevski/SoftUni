function guessPassword () {
    let myPass = "You are the best version of yourself in the fuckin World!";
    let yourPass = "You are the best version of yourself in the fuckin World?";

    let isValidPass = myPass === yourPass;

    if (isValidPass === true) {
        console.log("Welcome!");
    } else {
        console.log("Wrong!");
    }

}
guessPassword();