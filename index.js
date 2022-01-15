const output = document.querySelector("#output");

const customer = {
  name: "Justin",
  rentals: [
    { movieID: "F001", days: 3 },
    { movieID: "F002", days: 1 },
  ],
};

const movies = {
  F001: { title: "Ran", code: "regular" },
  F002: { title: "Trois Couleurs: Bleu", code: "regular" },
};

function statement(customer, movies) {
  let totalAmount = 0;
  let frequentRenterPoints = 0;
  let result = `Rental Record for ${customer.name} `;
  for (let r of customer.rentals) {
    let movie = movies[r.movieID];
    let thisAmount = 0;

    // determine amount for each movie
    switch (movie.code) {
      case "regular":
        thisAmount = 2;
        if (r.days > 2) {
          thisAmount += (r.days - 2) * 1.5;
        }
        break;
      case "new":
        thisAmount = r.days * 3;
        break;
      case "childrens":
        thisAmount = 1.5;
        if (r.days > 3) {
          thisAmount += (r.days - 3) * 1.5;
        }
        break;
    }

    //add frequent renter points
    frequentRenterPoints++;
    // add bonus for a two day new release rental
    if (movie.code === "new" && r.days > 2) frequentRenterPoints++;

    //print figures for this rental
    result += ` ${movie.title}\t${thisAmount}`;
    totalAmount += thisAmount;
  }
  // add footer lines
  result += `Amount owed is ${totalAmount}`;
  result += `You earned ${frequentRenterPoints} frequent renter points`;
  return result;
}

function renderHtml(customer, movies) {
  return (output.innerHTML = statement(customer, movies));
}

renderHtml(customer, movies);
