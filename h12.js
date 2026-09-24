const ostukorv = {
    tooted: [
        { nimi:'Piim', hind:3.60, kogus:2 },
        { nimi:'Leib', hind:2.00, kogus:1 },
        { nimi:'Munad', hind:1.50, kogus:6 },
        { nimi:'Juust', hind:4.20, kogus:1 },
        { nimi:'Tomatid', hind:2.30, kogus:3 },   
        ],


        Kuvasisu: function() {
            const korv = document.querySelector("#ostukorv");
            this.tooted.forEach(toode => {
                korv.innerHTML += `<li>${toode.nimi} - ${toode.hind} EUR - Kogus: ${toode.kogus}</li>`;
                // console.log(`${toode.nimi} - ${toode.hind} EUR - Kogus: ${toode.kogus}`);
            })
        },

        LisaToode: function(nimi,hind,kogus) {
            this.tooted.push({ nimi: nimi, hind: hind, kogus: kogus });
        },

        KoguSumma: function() {
            const kokku = document.querySelector("#summa");
            summa = 0
            this.tooted.forEach(toode => {
                summa += (toode.kogus*toode.hind)
            })
            kokku.innerHTML += `${Math.round(summa)}€`;

            // console.log('Ostukorvi kogu summa:', summa, 'EUR');
        },
        
    }

