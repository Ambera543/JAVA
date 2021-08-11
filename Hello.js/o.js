const masinos = [0, 0, 0, 0, 0, 0, 0, 0];
let lyderis = 0;
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
}
// spausdinam laimetoja
console.log(masinos);
console.log(lyderis, masinos[lyderis]);

/* masinytes[i].greitis += greicioPokytis;
        }
        
        masinytes[i].kelias += masinytes[i].greitis */