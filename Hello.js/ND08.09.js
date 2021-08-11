const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function failoVardoIvedimas(msg) {
    return new Promise((resolve, reject) => {
        rl.question(msg, data => {
            resolve(data);
        });
    });
}

function readFile(name, options) {
    return new Promise((resolve, reject) => {
        fs.readFile(name, options, (err, data) => {
            if (err) {
                reject(err);
                return console.log("nepavyko perskaityti failo");
            }
            resolve(data);
            console.log("Perskaiciau ", f);
        });
    });
}

async function main() {

    var f = await failoVardoIvedimas("Ivesk failo varda:");

    let allData = "";

    let p = readFile (f, {
        encoding: "utf-8"
    });
    //.then allData += data;
   // console.log(allData);
//}
    //.catch(
      //  err => {
       //     console.log("nepavyko perskaityti failo");
       //     console.log(err);
       // }
    
    rl.close();

}
main();

/*paprasyti ivesti failo varda
perskaityti faila
jei perskaite be klaidu - atspausdinti teksta
jei klaidos - atspausdinti klaida

paprasyti ivesti failo vardus (atskirtus tarpais)
pvz: Ivesk failu fardus: a.txt b.txt d.txt
suskaldot stringa per tarpa - gaunat masyva su failu pavadinimais
perskaitot visus failus nurodyta tvarka
jei perskaite be klaidu - kaupti teksta kintamajame
jei klaidos - atspausdinti klaida
pabaigoj atspausdinti sukaupta teksta*/