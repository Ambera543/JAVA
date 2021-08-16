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

// PASTABA: jei kazkuri reikalavima atitinka daugiau nei vienas mokinys, spausdinti visus

// Isspausdinti mokinio varda ir pazymi, kuris turi prasciausia pazymi
blogiausiasPazymys=[ ];
let min = 0;
for (let i = 0; i < data.length; i++) {
    blogiausiasPazymys[i] = (Math.min(...data[i].marks))
}
min = Math.min(...blogiausiasPazymys)
for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].marks.length; j++)
        if (data[i].marks[j] == min) {
            console.log("Prasciausias pazymis: ", data[i].name, min);
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
        if (data[i].marks[j] == max) {
            console.log("Geriausias pazymis: ", data[i].name, max);
        }
}

/*const highestGrades = data.map((stud) => {
    return {
       name: stud.name,
       highestGrade: Math.max.apply(Math, stud.grades) // get a student's
    };
 });
 const bestStudent = highestGrades.sort((a, b) => {
    return (b.highestGrade - a.highestGrade);
 })[0];
 console.log(bestStudent.name);*/


// Isspausdinti mokinio varda ir pazymiu vidurki, kuris turi prasciausia pazymiu vidurki
/*var suma = 0;
for (var i = 0; i< data.length; i++){
    suma += (data[i])

    var vidurkis = suma/ data.length;}
    console.log(vidurkis);*/


// Isspausdinti mokinio varda ir pazymiu vidurki, kuris turi geriausia pazymiu vidurki
 /*var suma = 0;
for (let i = 0; i< data.length; i++){
    suma += (data[i])

    var vidurkis = suma/ data.length;}
    console.log(vidurkis);*/
    let didziausiasVid = average(data[0].marks);
    for (var i = 0; i < data.length; i++) {
        let marksVid = average(data[i].marks);
        if (marksVid >= didziausiasVid) {
            didziausiasVid = marksVid;
        }
    }
    
    for (var i = 0; i < data.length; i++) {
        if (average(data[i].marks) == didziausiasVid) {
            console.log('Mokinys ' + data[i].name);
            console.log('Geriausias pazymiu vidurkis ' + didziausiasVid);
        }
    }

// Isspausdinti mokinio varda, jei jis turi pazymi 8
for (let i = 0; i < data.length; i++){
    for(let j = 0; j < data[i].marks.length; j++)
    if(data[i].marks[j] === 8){
        return data[i]. name
    }
console.log("Turi pazymi 8", data[i].name);
}


// Isspausdinti mokinio varda, jei jis neturi pazymio 7 
let b = 0;
for (let i = 0; i < data.length; i++){
    for(let j = 0; j < data[i].marks.length; j++)
    if(data[i].marks[j] === 7){
        b += 1;
}
if(b === 0)
console.log("Neturi pazymio 7", data[i].name);
}
