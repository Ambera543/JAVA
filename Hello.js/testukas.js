const data = [
    {
        name: 'Jonas',
        marks: [10, 2, 8, 4, 6]
    },
    {
        name: 'Maryte',
        marks: [3, 7, 9, 5]
    },
    {
        name: 'Petras',
        marks: [7, 7, 7]
    },
    {
        name: 'Ona',
        marks: [10, 9, 8, 7, 6]
    },
]


// Isspausdinti mokinio varda ir pazymi, kuris turi prasciausia pazymi
blogiausiasPazymys=[ ];
let min = 0;
for (let i = 0; i < data.length; i++) {
    blogiausiasPazimys[i] = (Math.min(...data[i].marks))
}
min = Math.min(...blogiausiasPazymys)
for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].marks.length; j++)
        if (data[i].marks[j] === min) {
            console.log("Prasciausias pazimys: ", data[i].name, min);
        }
}
// Isspausdinti mokinio varda ir pazymi, kuris turi geriausia pazymi

geriausiasPazymys=[ ];
let max = 0;
for (let i = 0; i < data.length; i++) {
    geriausiasPazymys[i] = (Math.max(...data[i].marks))
}
max = Math.max(...geriausiasPazymys)
for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].marks.length; j++)
        if (data[i].marks[j] === max) {
            console.log("Geriausias pazymys: ", data[i].name, max);
        }
}
// Isspausdinti mokinio varda ir pazymiu vidurki, kuris turi geriausia pazymiu vidurki
/*let tm = 0;
let suma = 0;
for (let i = 0; i< data.length; i++){
    suma += (data[i])

    var vidurkis = suma/ data.length;}
    console.log(vidurkis);
    if (data.vidurkis > data.vidurkis) {
      
        data[i].name = i;
    } if(vidurkis){
        tm += 1;
}
if(tm === 0)
console.log(vidurkis, data[i].name);*/


// Isspausdinti mokinio varda, jei jis turi pazymi 8

for (let i = 0; i < data.length; i++){
    for(let j = 0; j < data[i].marks.length; j++)
    if(data[i].marks[j] === 8){
        console.log("Turi pazymi 8", data[i].name);
    }

}

// Isspausdinti mokinio varda, jei jis neturi pazymio 7 
let t = 0;
for (let i = 0; i < data.length; i++){
    for(let j = 0; j < data[i].marks.length; j++)
    if(data[i].marks[j] === 7){
        t += 1;
}
if(t === 0)
console.log("Neturi pazymio 7", data[i].name);
}
