console.log(d);
let a = 10;
{
    let b = 15;
    {
        let a = 77;
        let c = 20;
        var d = 30;
        console.log(a, b, c, d);
        //        77, 15, 20, 30
        a = 25;
    }
    console.log(a, b);
    //         10, 15
}
console.log(a, d);
//         10, 30

/*
d: 30
a: 10
    b: 15
        a: 25
        c: 20
*/