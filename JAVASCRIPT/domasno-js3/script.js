
function calcDensity(population, area) {
  return (population / area).toFixed(2);
}


const country = {
  name: "Македонија",
  capital: "Скопје",
  population: 2050000,
  area: 25713,
  printInfo: function () {
    console.log(`${this.name}, главен град: ${this.capital}`);
  }
};


country.printInfo();

const cities = [
  { name: "Скопје", population: 506000, area: 571 },
  { name: "Битола", population: 74000, area: 422 },
  { name: "Куманово", population: 72000, area: 509 },
  { name: "Прилеп", population: 66000, area: 420 },
  { name: "Тетово", population: 56000, area: 1080 },
  { name: "Велес", population: 44000, area: 870 },
  { name: "Охрид", population: 42000, area: 389 },
  { name: "Гостивар", population: 36000, area: 513 },
  { name: "Струмица", population: 35000, area: 312 },
  { name: "Кочани", population: 28000, area: 360 }
];


cities.forEach(city => {
  console.log(`Град: ${city.name}, Жители: ${city.population}`);
});


cities.forEach(city => {
  const density = calcDensity(city.population, city.area);
  console.log(`Густина на население во ${city.name}: ${density} жители/км²`);
});

console.log("---------------------");

let mostPopulated = cities[0];

cities.forEach(city => {
  if (city.population > mostPopulated.population) {
    mostPopulated = city;
  }
});

console.log("Најнаселен град е:", mostPopulated.name, mostPopulated.population);

console.log("---------------------");

const top3 = [...cities] 
  .sort((a, b) => b.population - a.population)
  .slice(0, 3);

console.log("Топ 3 најнаселени градови:");
top3.forEach(city => console.log(city.name, city.population));

console.log("---------------------");

const totalPopulation = cities.reduce((sum, city) => sum + city.population, 0);

const averagePopulation = (totalPopulation / cities.length).toFixed(0);

console.log("Просек на жители:", averagePopulation);
