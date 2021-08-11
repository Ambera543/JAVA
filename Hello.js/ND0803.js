/*
sukurti klase Zmogus su savybem
vardas
pavarde
gimimoMetai
amzius (get)
pilnas vardas (get/set)
funksionalumas
labas() -> atspausdinti Labas Vardas Pavadre
sukurti klase Studentas paveldeta nuo zmogaus
mokykla
kursas
labas() -> atspausdinti Labas Vardas Pavadre, mokausi Mokykla
peritiIKitaKursa(balai) -> balai gali buti (1..100) jei balai < 35 i kita kursa nepereina
sukurti ir su sena ir su nauja sintakse
*/
class Zmogus {
    construction(vardas, pavarde, gimimoMetai){
        this.vardas = vardas;
        this.pavarde = pavarde;
        this.gimimoMetai= gimimoMetai;
    }
    get amzius () {
        return this.calcAmzius();}

        calcAmzius(){
            return 2021- this.gimimoMetai;
        }
    }
    Object.defineProperty(zmogus, "pilnasVardas", {
        enumerable: true,
        configurable: true,
        get: function() {
            return this.vardas + " " + this.pavarde;
        },
        set: function(value) {
            let dalys = value.split(" ");
            this.vardas = dalys[0];
            this.pavarde = dalys[1];
        }
    });

    console.log(zmogus.pilnasVardas)
    console.log("Labas", vardas, pavarde)

    class Studentas extends Zmogus {
        construction (vardas, pavarde, gimimoMetai, mokykla, kursas){
            super (vardas, pavarde, gimimoMetai);
            this.mokykla = mokykla;
            this.kursas =  kursas;
        }
    }
    console.log("Labas", vardas, pavarde,  "mokausi", mokykla)

    if (balai > 35){
        "pereina i kita kursa"
    }
    else "nepereina"