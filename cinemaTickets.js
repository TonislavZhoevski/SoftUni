function cinemaTickets(input) {
  
  let index = 0;
  let row = input[index];
  let standardTickets = 0;
  let kidTickets = 0;
  let studentTickets = 0;

  while (row !== "Finish") {

    let filmName = row;
    index++;
    let freeSpace = Number(input[index]);
    
    let ticketsPerFilm = 0; // изнесено извън вътрешния while
    index++;
    row = input[index]; // подготвяме първия тип билет

    while (row !== "End") {
      let ticketType = row;

      switch (ticketType) {
        case "standard": standardTickets++; break;
        case "kid": kidTickets++; break;
        case "student": studentTickets++; break;
      }

      ticketsPerFilm++;
      console.log(ticketsPerFilm);
      
      index++;
      row = input[index];// 🔹 обновяваме row, за да излезем, когато стане "End"
    }

    console.log(filmName);
    console.log(freeSpace);

    index++; // минаваме на следващия филм
    row = input[index]; // 🔹 и отново обновяваме row за външния while
  }
  

}
cinemaTickets(["Taxi",
  "10",
  "standard",
  "kid",
  "student",
  "student",
  "standard",
  "standard",
  "End",
  "Scary Movie",
  "6",
  "student",
  "student",
  "student",
  "student",
  "student",
  "student",
  "Finish"]);