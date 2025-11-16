let brzina = 80;

if (brzina > 60) {
  console.log("Kazna! Prebrzo vozis.");
} else {
  console.log("Vo ramki na dozvolenoto e.");
}

console.log("--------------");

let pari = 300;
let cena = 500;

if (pari >= cena) {
  console.log("Mozes da go kupis proizvodot.");
} else {
  console.log("Nemas dovolno pari.");
}

console.log("--------------");

let username = true;
let password = false;

if (username && password) {
  console.log("Uspesno logiranje");
} else {
  console.log("Greska! Proveri gi podatocite.");
}

console.log("--------------");

let temperatura = 2;

if (temperatura <= 0) {
  console.log("Temperaturata e vo minus, moze da zamrzne.");
} else {
  console.log("Nema opasnost od mrznje.");
}

console.log("--------------");

let imaKarta = true;
let eNaLista = false;

if (imaKarta || eNaLista) {
  console.log("Mozes da vlezes na nastanot");
} else {
  console.log("Ne mozes da vlezes na nastanot");
}

