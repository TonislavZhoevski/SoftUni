function demo() {
  
  // for (let a = 1; a <= 10; a++) {
    
  //   if (a === 7) {
      
  //     continue;

  //   }
  //   console.log(a);

  // }

  // console.log("-----------");

  let num = 0;
  while (num <= 10) {
    num++;
    if (num === 7) {
      continue;
    }
    console.log(num);
  }

  console.log("after loop");

}
demo();