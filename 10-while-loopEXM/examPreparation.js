function examPreparation(input) {
  let index = 0;
  let badGrade = Number(input[index]);
  index++;

  let badGradeCounter = 0;
  let sumGrade = 0;
  let countTask = 0;

  let command = input[index];
  index++;

  let isNeedBreak = false;
  let taskName = "";

  while (command !== "Enough") {
    taskName = command;
    let tempGrade = Number(input[index]);
    index++;

    countTask++;
    sumGrade += tempGrade;

    if (tempGrade <= 4) {
      badGradeCounter++;
    }

    if (badGradeCounter === badGrade) {
      isNeedBreak = true;
      console.log(`You need a break, ${badGrade} poor grades.`);
      break;
    }

    command = input[index];
    index++;
  }

  if (!isNeedBreak) {
    let avg = sumGrade / countTask;
    console.log(`Average score: ${avg.toFixed(2)}`);
    console.log(`Number of problems: ${countTask}`);
    console.log(`Last problem: ${taskName}`);
  }
}
/* examPreparation([
"2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"
]); */

examPreparation([
"3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"
]);