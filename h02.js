
// Harjutus 10
//  Klassikaline funktsioon
function teremaailm(nimi) {
    console.log("Tere "+nimi)
    console.log(`Tere ${nimi}`)
}

teremaailm("kuri maailm")

//  Anonüümne funktsioon
const terejalle = function(nimi) {
    console.log("Tere "+nimi)
}

terejalle("taevas")

//  Noolefunktsioon
const teretere = (nimi) => {
    console.log("Tere "+nimi)
}

teretere("varvas")

// Argumendiga funktsioon
function kuupaevEesti(kuupaev) {
    kuud = [
    "", "jaanuar", "veebruar", "märts", "aprill", 
    "mai", "juuni", "juuli", "august", 
    "september", "oktoober", "november", "detsember"
]
    tykeldus = kuupaev.split(".")
    console.log(tykeldus[0] + ". " + kuud[Number(tykeldus[1])])
}

kuupaevEesti("19.07.23")

// Salajane sõnum
salajaneSonum = (sonum) => {
    taishaalikud = "aeiouõäöü"
    let uus_sona = ""
    for (let i = 0; i < sonum.length; i++) {
        taht = sonum[i];
        if (taishaalikud.includes(taht.toLowerCase())) {
            taht = "*"
        }
        uus_sona = uus_sona.concat(taht)
    }
    console.log(uus_sona)
}

salajaneSonum("ValguskiirUs")