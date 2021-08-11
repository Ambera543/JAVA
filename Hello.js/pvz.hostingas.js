function div(a, b) {
    console.log(superTetis);
    // console.log(tetis);
    return a/b;
    }
    function calc(veiksmas, a, b) {
    function sum (sk1, sk2) {
    console.log(superTetis);
    console.log(tetis);
    return sk1 + sk2;
    }
    let tetis = "tetis";
    if (veiksmas === "suma") {
    return sum(a, b);
    } else if (veiksmas === "atimtis") {
    return sub (a, b);
    } else if (veiksmas === "dalyba") {
    return div (a, b);
    } else {
    console.log("nezinomas veiksmas");
    }
    function sub (b, c) {
    return b - c;
    }
    }
    let superTetis = "superTetis";
    console.log(calc("suma", 3, 4));
    // console.log(calc("atimtis", 15, 7));
    // console.log(calc("daugyba", 15, 7));
    console.log(calc("dalyba", 15, 7));