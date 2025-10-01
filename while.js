function demo() {
  
  // for (let a = 1; a <= 10; a++) {
    
  //   if (a === 7) {
  //     break;
  //   }
  //   console.log(a);

  // }

  // console.log("-----------");

  let num = 1;
  while (num <= 10) {
    if (num === 7) {
      break;
    }
    console.log(num);
    num++;
  }

  console.log("after loop");

}
demo();