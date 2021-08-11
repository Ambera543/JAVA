/*8 masinos su savybem:
pavadinimas
kelias
greitis
vyksta lenktynes (ciklas):
kiekvieno ciklo metu kiekviena masina pakeicia savo greiti random (-5..5) km
atbuliniu masina vaziuot negali
kiekvieno ciklo metu kiekviena masina pavaziuoja per tiek, koks yra jos greitis
lenktynes baigiasi, kai bent viena masina nuvaziuoja 1000 km
pabaigoj atspausdinam visa turnyrine lentele isrusiuota pagal nuvaziuota kelia mazejimo tvarka
*)komentatorius

/*const masinos = [0, 0, 0, 0, 0, 0, 0, 0];
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

*/

const cars = [{ pavadinimas: 'Honda', kelias: 0, greitis: 0},
           { pavadinimas: 'Mazda', kelias: 0, greitis: 0},
           { pavadinimas: 'Audi', kelias: 0, greitis: 0},
           { pavadinimas: 'Citroen', kelias: 0, greitis: 0},
           { pavadinimas: 'Toyota', kelias: 0, greitis: 0},
           { pavadinimas:'Volkswagen', kelias: 0, greitis: 0},
           { pavadinimas: 'MB', kelias: 0, greitis: 0},
           { pavadinimas: 'BMW', kelias: 0, greitis: 0}];

        let lyderis = 0;
    while (cars[lyderis] < 1000){
    for(let i = 0; i < cars.length; i++) {
        greicioPokytis += Math.trunc(Math.random() * 5 + 1);
        if (cars[i] > cars[lyderis]) {
            lyderis = i;
            cars.greitis += greicioPokytis;
            cars.kelias += cars.greitis;
        }
    }
}
console.log(cars)
console.log(lyderis, cars [lyderis])