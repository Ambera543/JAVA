var sk = 2;
while (sk <= 100) {
var daliklis = 2;
var pirminis = true;
while (daliklis < sk) {
if (sk % daliklis == 0) {
pirminis = false;
}
daliklis += 1;
}
if (pirminis) {
console.log(sk);
}
sk += 1;
}
