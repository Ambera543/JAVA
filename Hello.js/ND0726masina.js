const masinos = [0, 0, 0, 0, 0, 0, 0, 0];
let lyderis = 0;
let check = 100;
// lenktyniu ciklas
while (masinos[lyderis] < 1000) {
// visos masinos pavaziavo
for(let i = 0; i < masinos.length; i++) {
masinos[i] += Math.trunc(Math.random() * 5 + 1);
// ir paziurim ji nuvaziavusi daugiau uz esama lyderi
if (masinos[i] > masinos[lyderis]) {
// i-toji masina tampa nauju lyderiu
lyderis = i;
}
}
// tikrinam ar lyderis nuvaziavo dar 100 km
if (masinos[lyderis] > check) {
console.log("siuo metu pirmauja", lyderis, masinos[lyderis]);
check += 100;
}
}
// spausdinam laimetoja
console.log(masinos);
console.log(lyderis, masinos[lyderis]);