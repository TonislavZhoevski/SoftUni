function guessPassword (myPass) {
    let yourPass = "s3cr3t!P@ssw0rd";

    let isValidPass = myPass === yourPass;

    if (isValidPass === true) {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }

}
guessPassword("qwerty");