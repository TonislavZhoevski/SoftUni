function numsTo1000EndingAt7 () {

    for (let i = 0; i <= 997; i++) {
        if (i % 7 === 0) {
            console.log(i);
        }
    }

}
numsTo1000EndingAt7();