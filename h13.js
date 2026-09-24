const loend = document.querySelectorAll("li")
loend.forEach(e => {
    if(e.textContent.includes("Ootel")){
        e.classList.add("list-group-item-warning")
    }
    if(e.textContent.includes("Tehtud")){
        e.classList.add("list-group-item-success")
    }
    if(e.textContent.includes("Viga")){
        e.classList.add("list-group-item-danger")
    }
});


const kaardid = document.querySelectorAll(".card")
const tiitel = document.querySelectorAll("h5");
const tekst = document.querySelectorAll("p");
let m = 0
kaardid.forEach(kaart => {
    let nimi = kaart.querySelector("img").getAttribute("data-title")
    let kirjeldus = kaart.querySelector("img").getAttribute("data-description")
    tiitel[m].innerHTML=nimi
    tekst[m].innerHTML=kirjeldus
    m+=1
});

