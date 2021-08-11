
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function skaiciausIvedimas(msg) {
    return new Promise((resolve, reject) => {
        rl.question(msg, data => {
            resolve(parseInt(data));
        });
    });
}

async function tekstoIvedimas(msg) {
    return new Promise((resolve, reject) => {
        rl.question(msg, data => {
            resolve(data);
        });
    });
}

async function main() {
    var run = true;
    while (!gi == X)
  
    var gi = await tekstoIvedimas("Ivesk A/P/Z/X");
    console.log( gi);


   { var gameItem = [ "A", "P", "Z",];
 
   var A = 1;
   var P = 2;
   var Z = 3;

    var game = (Math.random());
    console.log(game);
    
    if ((gi = A) && (game = Z)){
         close= "laimejai";}
    else if  ((gi = P) && (game = A)){
        close = "laimejai";}
    else if ( (gi = Z) && (game = P )) {
        close = "laimejai";
    } else if (gi = game) {
        close = "lygiosios";
    } else if  ( gi = X ){
        gi = "Game Over";
    } 
    else {close = "pralosei";
}

    console.log(close);
    rl.close();
}
}

main();
