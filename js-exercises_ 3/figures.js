function demo (figure, a, b) {
  
  let area = 0;
  a = Number(a);
  b = Number(b);

  if (figure === 'square') {
    area = a * a;

  } else if (figure === 'rectangle') {
    area = a * b;

  } else if (figure === 'circle') {
    let r = a;
    area = Math.PI * r * r;

  } else if (figure === 'triangle') {
    area = (a * b) / 2;

  }

  console.log(area.toFixed(3));

}
demo("triangle", 4.5, 20);