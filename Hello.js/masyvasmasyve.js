
var st = [ [1, 2, 3],  [4, 5, 6], [7, 8, 9], [10, 11, 12]];
console.log(st);
console.log(st[1][2]);

st[1] = [13, 14, 15, 16, 17];
console.log(st);
console.log(st[1][2]);
var suma = 0;
for (var i = 0;
     i < st.length; i++) {​​​​​
         for (var j = 0; j < st[i].length; j++) {​​​​​
             suma += st[i][j]; 
            }​​​​​}​​​​​console.log(suma);

