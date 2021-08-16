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

let suma = 0;
for (var i = 0; i< data.length; i++){
    suma += (data[i])

    let vidurkis = suma/ data.length;}
    console.log(vidurkis);
    
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