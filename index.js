
//Initial list of freelancers (STATE)
const listings = [
  { name: "Alice", price: 30, occupation: "writer" },
  { name: "Bob", price: 50, occupation: "teacher" },
];

//Additional freelancer data to add to listings (NOT STATE)
const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

//Maximum listings on page
const maxListings = 10;

//Adds freelancer listings at intervals, up to maxListings
const addListingIntervalId = setInterval(addListing, 2000);

render(); //Render initial state

//Render freelancer listings
function render() {
  const listingSelect = document.querySelector("#listings");
  const listElements = listings.map((freelancer) => {
    const element = document.createElement("div");
    element.className = "grid-item";
    element.innerHTML = freelancer.name + ", $" + freelancer.price + ", " + freelancer.occupation;
    return element;
  });
  listingSelect.replaceChildren(...listElements);
  //Update average price of freelancers on render using getAveragePrice
  const updateAveragePrice = document.querySelector("#averagePrice");
  updateAveragePrice.innerHTML = "The average starting price is $" + getAveragePrice() + ".";
}

//Add a random person from freelancers to listings
function addListing() {
  const randomFreelancer = freelancers[Math.floor(Math.random() * freelancers.length)];
  listings.push( randomFreelancer );

  render();

  //Stops adding listings if maxListings is reached
  if (listings.length >= maxListings){
    clearInterval(addListingIntervalId);
  }
}

//Returns average price of freelancers in current listings
function getAveragePrice () {
  let sum = 0;
  for (i = 0; i < listings.length; i++) {
    sum += listings[i].price;
  }
  let averagePrice = (Math.round(sum / listings.length));
  return averagePrice;
}
