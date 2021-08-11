var m = [11, 12, 13, 14, 15];
var mk = new Array(m.length);
for (var i = 0; i < mk.length; i++) {
    mk[i] = new Array(mk.length);
}
for (var i = 0; i < m.length; i++) {
for (var j = 0; j < m.length; j++) {
mk[i][j] = m[(i + j) % m.length];
}
}


for (var i = 0; i < m.length; i++) {
    for (var j = 0; j < m.length; j++) {
    md[i][(i + j) % m.length] = m[j];
    }
    }
