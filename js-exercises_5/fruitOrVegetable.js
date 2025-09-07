function fruitOrVegetable (input) {
  let product = input[0];

  product = product + " and one bear"; 

  switch (product) {
    case "banana":
    case "apple":
    case "kiwi":
    case "cherry":
    case "lemon":
    case "grapes":
      console.log("fruit");
      break;
    case "tomato":
    case "cucumber":
    case "pepper":
    case "carrot":
      console.log("vegetable");
      break;
    default:
      console.log(`${product}`);
  }
}
fruitOrVegetable(["lemon"]);
fruitOrVegetable(["carrot"]);
fruitOrVegetable(["bread"]);