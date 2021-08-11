/*
parasyti funkcija, kuri paskaiciuoja trikampio plota
pagal nurodyus krastiniu ilgius
(Herono formule)
pradzioj reikia patikrinti ar susidaro trikampis
jei nesusidaro - atspausdinti
"ne trikampis"
ir grazinti -1;
2, 4, 5
654, 15, 666
65, 48, 11
*/

	function trikampioPlotas(a, b, c) {
		if (a < b + c && b <c + a && c < b + a){  
		p = (a + b + c)/2;
		return Math.sqrt(p *(p - a) * (p - b) * (p - c));
	 }
	
	      else {console.log("ne trikampis");}
		  return -1;}
	
		  console.log(trikampioPlotas(2, 4, 5))
		  console.log(trikampioPlotas(654, 15, 666))
		  console.log(trikampioPlotas(65, 48, 11))


