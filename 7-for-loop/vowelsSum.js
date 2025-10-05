function vowelsSum (text) {

    let sum = 0;
    // let index = 0;
    // index = text[index];
    // let arrLetters = ["a", "e", "i", "o", "u"];

    for (let i = 0; i <= text.length; i++ ) {
        
        let letter = text[i];

        switch (letter) {
            case "a": sum += 1; break;
            case "e": sum += 2; break;
            case "i": sum += 3; break;
            case "o": sum += 4; break;
            case "u": sum += 5; break;
        }
    }
    console.log(sum);
    
}
vowelsSum("beer");