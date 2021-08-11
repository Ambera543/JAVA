var m = [11, 12, 13, 14, 15];
var md = new Array(m.length);
for (var i = 0; i < md.length; i++) {
    md[i] = new Array(m.length);
    md = [m]
}
a =  [m [4], m [0], m [1], m [2], m [3]]
b =  [m [3], m [4], m [0], m [1], m [2]]
c =  [m [2], m [3], m [4], m [0], m [1]]
d =  [m [1], m [2], m [3], m [4], m [0]]


console.log(md);
console.log(a);
console.log(b);
console.log(c);
console.log(d);

/*
11 12 13 14 15
15 11 12 13 14
14 15 11 12 13
13 14 15 11 12
12 13 14 15 11
*/