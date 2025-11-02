function oldLib(arr) {
  const favoriteBook = arr[0];

  let index = 1;
  let nextBook = arr[index];

  while (nextBook !== "No More Books") {
    if (nextBook === favoriteBook) {
      console.log(`You checked ${index - 1} books and found it.`);
      break;
    }
    index++;
    nextBook = arr[index];
  }

  if (nextBook === "No More Books") {
    console.log("The book you search is not here!");
    console.log(`You checked ${index - 1} books.`);
  }
}
oldLib([
  "The Spot",
  "Hunger Games",
  "Harry Potter",
  "Torronto",
  "Spotify",
  "No More Books"
]);

/* "The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books" */

/* "Troy",
"Stronger",
"Life Style",
"Troy" */