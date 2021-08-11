/*
Masinu lenktynes
masyvas is 8 masinu (nuvaziuoti kilometrai)
vyksta lenktyes (ciklas):
kiekvieno ciklo metu kiekviena masina pavaziuoja random (1..5) km
lenktynes baigiasi, kai bent viena masina nuvaziuoja 1000 km
pabaigoj atspausdinam kelinta masina ir kiek nuvaziavo
*)
komentatorius
kas 100 km reikia atspausdinti lyderio numeri ir nuvaziuota atstuma
*/
const masinos = [0, 0, 0, 0, 0, 0, 0, 0];
let vaziuojam = true;
// lenktyniu ciklas
while (vaziuojam) {
// visos masinos pavaziavo
for(let i = 0; i < masinos.length; i++) {
masinos[i] += Math.trunc(Math.random() * 5 + 1);
}
// ieskom ar yra finisavusiu
for(let i = 0; i < masinos.length; i++) {
if (masinos[i] >= 1000) {
vaziuojam = false;
break;
}
}
}
// kuri masina laimejo
let laimetojas = 0;
for (let i = 1; i < masinos.length; i++) {
if (masinos[i] > masinos[laimetojas]) {
laimetojas = i;
}
}
// spausdinam laimetoja
console.log(masinos);
console.log(laimetojas, masinos[laimetojas]);