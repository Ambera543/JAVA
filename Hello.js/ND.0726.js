var sk = [45, 7, -4, -7, 42, 7, 1, 0, 9];{
    var t= [];

// surusiuoti masyvo elementus didejimo tvarka
// surusiuoti masyvo elementus mazejimo tvark

 for (var i = 0; i < sk.length; i++){  
    for (var j =i+1; j < sk.Length; j++) {
        if (sk [i] > sk [j]) {
            sk [j] = sk [i];
            sk [i] = t;
            t = sk [j];   
        }
    }
 }
 console.log(t);
}