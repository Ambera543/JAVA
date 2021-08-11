/*function Puodukas(spalva, turis) {
    this.spalva = spalva;
    this.turis = turis;
    this.kiekis = 0;
    }
    let p1 = new Puodukas("rudas", 250);
    let p2 = new Puodukas("baltas", 150);
    console.log(p1);
    console.log(p2); */

    function Puodukas(spalva, turis) {
        this.spalva = spalva;
        this.turis = turis;
        this.kiekis = 0;
        this.ipilk = function(kiek) {
        this.kiekis += kiek;
        }
        }
        let p1 = new Puodukas("rudas", 250);
        let p2 = new Puodukas("baltas", 150);
        console.log(p1);
        console.log(p2);
        p1.ipilk(100);
        p2.ipilk(20);
        console.log(p1);
        console.log(p2);