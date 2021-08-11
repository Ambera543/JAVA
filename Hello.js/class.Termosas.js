function Termosas(spalva, turis) {
    Puodukas.call(this, spalva, turis);
    this.temperatura = 20;
    }
    Termosas.prototype = Object.create(Puodukas.prototype);
    Termosas.prototype.constructor = Termosas;
    Termosas.prototype.super = Puodukas.prototype;
    Termosas.prototype.pasildyk = function(kiek) {
    this.temperatura += kiek;
    if (this.temperatura > 80) {
    this.temperatura = 80;
    }
    }
    Termosas.prototype.ipilk = function(kiek) {
    this.super.ipilk.call(this, kiek);
    this.temperatura -= 5;
    };
    let t1 = new Termosas("zalias", 1000);
    console.log(t1);
    t1.ipilk(100);

    let t1 = new Termosas("zalias", 1000);
console.log(t1);
let t2 = Object.create(Termosas.prototype);
Termosas.call(t2, "melynas", 3000);
console.log(t2);