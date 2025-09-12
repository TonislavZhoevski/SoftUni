function shopCityProducts (input) {
  let product = input[0];
  let city = input[1];
  let quantity = Number(input[2]);

  let productPrice = 0;

  switch (city) {
    case "Varna": 
      switch (product) {
      case "coffee": productPrice = 0.45; break;
      case "water": productPrice = 0.7; break;
      case "beer": productPrice = 1.1; break;
      case "sweets": productPrice = 1.35; break;
      case "peanuts": productPrice = 1.55; break;
    }; break;
    case "Plovdiv":
      switch (product) {
      case "coffee": productPrice = 0.4; break;
      case "water": productPrice = 0.7; break;
      case "beer": productPrice = 1.15; break;
      case "sweets": productPrice = 1.3; break;
      case "peanuts": productPrice = 1.5; break;
    }; break;
    case "Sofia":
      switch (product) {
      case "coffee": productPrice = 0.5; break;
      case "water": productPrice = 0.8; break;
      case "beer": productPrice = 1.2; break;
      case "sweets": productPrice = 1.45; break;
      case "peanuts": productPrice = 1.6; break;
    }; break;
  }
  
  // if (city === "Varna") {
  //   switch (product) {
  //     case "coffee": productPrice = 0.45; break;
  //     case "water": productPrice = 0.7; break;
  //     case "beer": productPrice = 1.1; break;
  //     case "sweets": productPrice = 1.35; break;
  //     case "peanuts": productPrice = 1.55; break;
  //   }

    // if ( product === "coffee") {
    //   productPrice = 0.45;
    // } else if (product === "water") {
    //   productPrice = 0.7;
    // } else if (product === "beer") {
    //   productPrice = 1.1;
    // } else if (product === "sweets") {
    //   productPrice = 1.35;
    // } else if (product === "peanuts") {
    //   productPrice = 1.55;
    // }
  // } else if (city === "Plovdiv") {
    // if ( product === "coffee") {
    //   productPrice = 0.4;
    // } else if (product === "water") {
    //   productPrice = 0.7;
    // } else if (product === "beer") {
    //   productPrice = 1.15;
    // } else if (product === "sweets") {
    //   productPrice = 1.3;
    // } else if (product === "peanuts") {
    //   productPrice = 1.5;
    // }
  // } else if (city === "Sofia") {
  //   if ( product === "coffee") {
  //     productPrice = 0.5;
  //   } else if (product === "water") {
  //     productPrice = 0.8;
  //   } else if (product === "beer") {
  //     productPrice = 1.2;
  //   } else if (product === "sweets") {
  //     productPrice = 1.45;
  //   } else if (product === "peanuts") {
  //     productPrice = 1.6;
  //   }
  // } else {
  //   console.log("Invalid city");
  // }

  console.log(productPrice * quantity);
}
shopCityProducts(["coffee", "Varna", "2"]);
shopCityProducts(["peanuts", "Plovdiv", "1"]);
shopCityProducts(["beer", "Sofia", "6"]);