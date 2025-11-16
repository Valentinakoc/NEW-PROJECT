function populationDensity(city) {
  return city.population / city.area; 
}

const cities = [
  { name: "Skopje", population: 700000, area: 571 },
  { name: "Bitola", population: 75000, area: 422 },
  { name: "Kumanovo", population: 100000, area: 509 },
  { name: "Tetovo", population: 84000, area: 108 },
  { name: "Ohrid", population: 42000, area: 389 },
  { name: "Gostivar", population: 82000, area: 513 },
  { name: "Strumica", population: 55000, area: 320 },
  { name: "Veles", population: 44000, area: 317 },
  { name: "Prilep", population: 76000, area: 1195 },
  { name: "Kavadarci", population: 38000, area: 499 }
];

cities.forEach(city => {
  console.log(`${city.name} ima gustina: ${populationDensity(city).toFixed(2)} z/km2`);
});

console.log("-----------------");

const countries = [
  {
    name: "Macedonia",
    population: 2100000,
    print() {
      console.log(`Drzava: ${this.name}, populacija: ${this.population}`);
    }
  },
  {
    name: "Serbia",
    population: 6900000,
    print() {
      console.log(`Drzava: ${this.name}, populacija: ${this.population}`);
    }
  },
  {
    name: "Croatia",
    population: 4000000,
    print() {
      console.log(`Drzava: ${this.name}, populacija: ${this.population}`);
    }
  },
  {
    name: "Bulgaria",
    population: 6800000,
    print() {
      console.log(`Drzava: ${this.name}, populacija: ${this.population}`);
    }
  },
  {
    name: "Greece",
    population: 10400000,
    print() {
      console.log(`Drzava: ${this.name}, populacija: ${this.population}`);
    }
  },
  { name: "Albania", population: 2800000, print() { console.log(`Drzava: ${this.name}, populacija: ${this.population}`);} },
  { name: "Romania", population: 19000000, print() { console.log(`Drzava: ${this.name}, populacija: ${this.population}`);} },
  { name: "Hungary", population: 9600000, print() { console.log(`Drzava: ${this.name}, populacija: ${this.population}`);} },
  { name: "Slovenia", population: 2100000, print() { console.log(`Drzava: ${this.name}, populacija: ${this.population}`);} },
  { name: "Bosnia", population: 3300000, print() { console.log(`Drzava: ${this.name}, populacija: ${this.population}`);} }
];


countries.forEach(country => country.print());

console.log("-----------------");

const mostPopulated = cities.reduce((max, city) =>
  city.population > max.population ? city : max
);

console.log("Naj naselen grad e:", mostPopulated.name);

const top3 = [...cities]
  .sort((a, b) => b.population - a.population)
  .slice(0, 3);

console.log("Top 3 najnaseleni gradovi:");
top3.forEach(c => console.log(c.name, c.population));

const avgPopulation = cities.reduce((sum, city) => sum + city.population, 0) / cities.length;

console.log("Prosek populacija:", avgPopulation.toFixed(0));

console.log("-----------------");

cities.forEach(city => {
  console.log(city.name, city.population);
});

console.log("-----------------");

const namesUppercase = cities.map(city => city.name.toUpperCase());
console.log(namesUppercase);

console.log("-----------------");

const bigCities = cities.filter(city => city.population > 100000);
console.log(bigCities);

console.log("-----------------");

const result = cities
  .filter(city => city.population > 50000)
  .map(city => city.name.toUpperCase());

console.log(result);

console.log("-----------------");