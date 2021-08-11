class Puodukas {

    constructor(spalva, turis) {
        this.spalva = spalva;
        this.turis = turis;
        this.kiekis = 0;
    }

    get arPilnas() {
        return this.kiekis === this.turis;
    }

    // set arPilnas(naujaReiksme) {
    //     /////
    // }

    ipilk(kiek) {
        if (kiek <= 0) {
            return;
        }
        this.kiekis += kiek;
        if (this.kiekis > this.turis) {
            this.kiekis = this.turis;
        }
    }

    isgerk(kiek) {
        if (kiek <= 0) {
            return;
        }
        this.kiekis -= kiek;
        if (this.kiekis < 0) {
            this.kiekis = 0;
        }
    }
}


