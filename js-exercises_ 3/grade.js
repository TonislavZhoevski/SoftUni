function isExcellent (input) {
    let grade = Number(input[0]);

    if (grade >= 5.50) {
        console.log('Excellent!');
    } else if (grade >= 4.50) {
        console.log('Very Good!');
    } else if (grade >= 3.50) {
        console.log('Good!');
    } else if (grade >= 3) {
        console.log('Avarage!'); 
    } else {
        console.log('Poor!');
    }
}
isExcellent(["2.88"]);