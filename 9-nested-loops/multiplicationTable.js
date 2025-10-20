function mulstiplicationTable() {
  
  for (let first = 0; first <= 10; first++) {
    for (let second = 1; second <= 10; second++) {
      console.log(`${first} * ${second} = ${first * second}`);
    }
  }
}
mulstiplicationTable();