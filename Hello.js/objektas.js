
    let puodukas = {
        spalva: "rudas",
        turis: 300,
        kiekis: 25
        };
        let p = puodukas;
        p.kiekis -= 5;
        p = {
        spalva: "rudas",
        turis: 300,
        kiekis: 25
        };
        console.log(puodukas);
        console.log(p);

        let m = [15, 19, 23];
    let kitas = m;
    kitas[1] = 77;
    console.log(m);