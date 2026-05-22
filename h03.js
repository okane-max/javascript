// Harjutus 10
//  Toote objekt
let toode = {
    nimetus:"leib",
    hind:"0.89",
    kogus:"16",

    Koguhind: function() {
        return this.hind*this.kogus;
    },

    Muudakogust: function(muutus) {
        return this.kogus = muutus;
    },

    Objektisisu: function() {
        return `Toode: ${this.nimetus}\nHind: ${this.hind}€\nKogus: ${this.kogus}
        `
    }
}

console.log(toode)
console.log("Koguhind: "+ toode.Koguhind())
console.log(toode.Muudakogust(101))
console.log(toode.Objektisisu())


// Ostukorv
const ostukorv = {
tooted: [
    { nimi:'Piim', hind:3.60, kogus:2 },
    { nimi:'Leib', hind:2.00, kogus:1 },
    { nimi:'Munad', hind:1.50, kogus:6 },
    { nimi:'Juust', hind:4.20, kogus:1 },
    { nimi:'Tomatid', hind:2.30, kogus:3 },   
    ],

    Kuvasisu: function() {
        this.tooted.forEach(toode => {
        console.log(`${toode.nimi} - ${toode.hind} EUR - Kogus: ${toode.kogus}`);
        })
    },

    LisaToode: function(nimi,hind,kogus) {
        this.tooted.push({ nimi: nimi, hind: hind, kogus: kogus });
    }
}
ostukorv.Kuvasisu()
ostukorv.lisaToode('Kohv', 5.80, 2);