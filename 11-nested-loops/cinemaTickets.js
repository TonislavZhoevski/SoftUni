function cinemaTickets(input) {
  let index = 0;

  let command = input[index];
  index++;
  let studentTicketCount = 0;
  let standardTicketCount = 0;
  let kidTicketCount = 0;

  while (command !== "Finish") {
    let name = command;
    let freeSpace = Number(input[index]);
    index++;

    let ticketCount = 0; // it will be created here, because it is necessarry to have it again and again by every while(ticketType !== "End")-loop spinning with the new data for free space in percentage

    let ticketType = input[index];
    index++;

    while (ticketType !== "End") {
      switch (ticketType) {
        case "student": studentTicketCount++; break;
        case "standard": standardTicketCount++; break;
        case "kid": kidTicketCount++; break;
      }
      ticketCount++;
      if (ticketCount === freeSpace) {
        break;
      }
      ticketType = input[index];
      index++;
    }

    let soldTickets = ticketCount / freeSpace * 100;
    console.log(`${name} - ${soldTickets.toFixed(2)}% full`);
    command = input[index];
    index++;
  }


  let totalTicket = studentTicketCount + standardTicketCount + kidTicketCount;
  let student = studentTicketCount / totalTicket * 100;
  let standard = standardTicketCount / totalTicket * 100;
  let kid = kidTicketCount / totalTicket * 100;
  console.log(`Total tickets: ${totalTicket}`);
  console.log(`${student.toFixed(2)}% student tickets.`);
  console.log(`${standard.toFixed(2)}% standard tickets.`);
  console.log(`${kid.toFixed(2)}% kid tickets.`);
  
}
cinemaTickets([
  "Taxi",
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
  "Finish"
]);

/* cinemaTickets([
  "The Matrix",
  "20",
  "student",
  "standard",
  "kid",
  "kid",
  "student",
  "student",
  "standard",
  "student",
  "End",
  "The Green Mile",
  "17",
  "student",
  "standard",
  "standard",
  "student",
  "standard",
  "student",
  "End",
  "Amadeus",
  "3",
  "standard",
  "standard",
  "standard",
  "Finish"
]); */