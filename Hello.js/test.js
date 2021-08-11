var nuo = 2;
var iki = 9;
var x = nuo;
var i = nuo;
var j = nuo;

while (j <= iki) {
  while (i <= iki) {
    var rez = x * nuo;
    console.log(x + "*" + nuo + ": " + rez);
    i++;
    x++;
  }
  nuo++;
  j++;
  i = nuo;
  x = nuo;
}