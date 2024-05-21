// Question2:
// Use cities and log the names of 3 cities with the largest population in the console.

const cities = [
  {
    name: "Tokyo",
    country: "JP",
    population: 37977000,
  },
  {
    name: "Istanbul",
    country: "TR",
    population: 15154000,
  },
  {
    name: "Jakarta",
    country: "ID",
    population: 34540000,
  },
  {
    name: "Tehran",
    country: "IR",
    population: 13633000,
  },
  {
    name: "Manila",
    country: "PH",
    population: 23088000,
  },
  {
    name: "Seoul",
    country: "KR",
    population: 21794000,
  },
  {
    name: "Bangkok",
    country: "TH",
    population: 17066000,
  },
  {
    name: "Madrid",
    country: "ES",
    population: 3266126,
  },
  {
    name: "Athens",
    country: "GR",
    population: 664046,
  },
  {
    name: "Mexico City",
    country: "MX",
    population: 20996000,
  },
  {
    name: "Rome",
    country: "IT",
    population: 2872800,
  },
  {
    name: "Copenhagen",
    country: "DK",
    population: 1085000,
  },
  {
    name: "Nairobi",
    country: "KE",
    population: 5545000,
  },
];

const sortCities = cities.sort((a, b) => {
  return b.population - a.population;
});

// console.log(sortCities);

// method one
// for(let i = 0 ; i < 3 ; i ++){
//   console.log(sortCities[i].name);
// }

// method two
const newSortCities = sortCities.slice(0 , 3);
// console.log(...newEdit);
for(let i = 0 ; i < newSortCities.length ; i++){
  console.log(newSortCities[i].name);
}