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

    while (row !== "End") {
      index++;
      let ticketType = input[index];
      let ticketsPerFilm = 0;

      switch (ticketType) {
        case "standard": standardTickets++; break;
        case "kid": kidTickets++; break;
        case "student": studentTickets++; break;
      }
      ticketsPerFilm++;
    }
  }
  console.log(ticketsPerFilm);
  

}
cinemaTickets(["Taxi",
  "10",
  "standard",
  "kid",
  "student",
  "student",
  "standard",
  "standart",
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