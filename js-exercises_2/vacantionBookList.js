function vacantionBookList (pagesCount, pagesPerOneHour, daysCount) {
    let hoursToRead = pagesCount / (pagesPerOneHour * daysCount);

    console.log(hoursToRead);
    
}
vacantionBookList(432, 15, 4);