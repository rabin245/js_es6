const address = {
  street: "2nd",
  city: "Bhaktapur",
  country: "Nepal",
};

// old way
// const street = address.street;
// const city = address.city;
// const country = address.country;

// es6 object destructuring
const { street, city, country } = address;
console.log(street, city, country);

const { stret: st } = address;
