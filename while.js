function demo() {
  
  // for (let a = 1; a <= 10; a++) {
    
  //   if (a === 7) {
      
  //     return;

  //   }
  //   console.log(a);

  // }

  // console.log("-----------");

  let num = 1;
  while (num <= 10) {
    
    if (num === 7) {
      return;
    }
    
    console.log(num);
    num++;
  }

  console.log("after loop");

}
demo();