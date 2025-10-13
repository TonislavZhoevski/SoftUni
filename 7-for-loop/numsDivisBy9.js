function numsDivisBy9 (startNum, endNum) {
    
    let count = 0;
    let currentNum = 0;

    for (let currentNum = startNum; currentNum <= endNum; currentNum++) {
        
        if (currentNum % 9 === 0) {
            count += currentNum;
        }
    }

    console.log(`The sum: ${count}`);

    for (let currentNum = startNum; currentNum <= endNum; currentNum++) {
        
        if (currentNum % 9 === 0) {
            console.log(currentNum);
        }
    }
    
}
numsDivisBy9(100, 200);

// function numsDivisBy9 (startNum, endNum) {

//     let sum = 0;
//     let rowOfNums = '';

//     for (let currentNum = startNum; currentNum <= endNum; currentNum++) {

//         if (currentNum % 9 === 0) {
//             sum += currentNum;
//             rowOfNums += `${currentNum} `;
//         }
//     }

//     console.log(`The sum: ${sum}`);
//     console.log(rowOfNums);
// }
// numsDivisBy9(100, 200);