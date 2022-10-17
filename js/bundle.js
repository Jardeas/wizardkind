'use strict';

const sitetitle = "Wizardkind";
const version = "0.2"; 
const page = window.location.pathname;
const d$1 = new Date();

/*
Hier staat alle informatie opgeslaan van de gebruiker

versie 1.0
*/

// informatie over de gebruiker
let user = {
    // algemene informatie
    "id": localStorage.getItem("id"), // id van het paspoort 
    "voornaam": localStorage.getItem("voornaam"), // de voornaam
    "achternaam": localStorage.getItem("achternaam"), // de achternaam
    "geboortedatum": localStorage.getItem("geboortedatum"), // geboortedatum
    "geslacht": localStorage.getItem("geslacht"), // geslacht
    "bloedzuiverheid": localStorage.getItem("bloedzuiverheid"), // bloedzuiverheid (volbloed/halfbloed/dreuzeltelg)

    // school informatie
    "school": localStorage.getItem("school"), // school van de speler
    "afdeling": localStorage.getItem("afdeling"), // de afdeling van de speler (griffoendor, huffelpuf, ravenklauw, zwadderich)
    "jaar": localStorage.getItem("jaar"), // schooljaar waar de speler zich bevindt
    "punten": localStorage.getItem("punten"), // de punten die speler verdient tijdens zijn schooljaren

    // locatie informatie
    "locatie": localStorage.getItem("locatie"), // waar de speler zich bevindt (zweinstein, wegisweg, zweinsveld)
    "plaats": localStorage.getItem("plaats"), // waar de speler zich bevindt binnen in de locatie (Grote Zaal, Ollivander, Fonko's)

    // meta informatie
    "status": localStorage.getItem("status"), // status (online/offline)
    "versie": localStorage.getItem("versie"), // de versie waarin de gebruiker speelt
    "logincount": localStorage.getItem("logincount"), // aantal logins
    "speeltijd": localStorage.getItem("speeltijd") // de speeltijd
};
// uilen
({
    "uilen": localStorage.getItem("uilen") // de array met brieven
});
// opgeslagen statistieken
let userStats = {
    // algemene statistieken
    "level": localStorage.getItem("level"), // het level van het karakter
    "toverkunde": localStorage.getItem("toverkunde"), // level van het toveren
    "brouwkennis": localStorage.getItem("brouwkennis"), // level van het toverdranken brouwen

    "hp": localStorage.getItem("hp"), // de health van het karakter
    "maxhp": localStorage.getItem("maxhp"), // max health van het karakter (gaat omhoog als je levlt) 

    "hygiene": localStorage.getItem("hygiene"), // wanneer je moet wassen (max is 100)
    "slaap": localStorage.getItem("slaap"), // wanneer je moet slapen (max is 100)
    "sociaal": localStorage.getItem("sociaal"), // wanneer je naar aandacht hunkert
    "fun": localStorage.getItem("fun"), // wanneer je plezier wilt maken

    // Galjoenen, sikkels, knoeten
    "galjoenen": localStorage.getItem("galjoenen"), // 1 galjoen -> 17 sikkels -> 493 knoeten
    "sikkels": localStorage.getItem("sikkels"), // 1 sikkel -> 29 knoeten
    "knoeten": localStorage.getItem("knoeten"), // 1 knoet

};
// kenmerken over het karakter
({
    // uiterlijke kenmerken
    "haar": localStorage.getItem("haar"), // type haar (lang, kort, kaal, gekruld, etc)
    "haarkleur": localStorage.getItem("haarkleur"), // kleur haar (bruin, groen, geel, grijs, blond, etc)
    "ogen": localStorage.getItem("ogen"), // kleur ogen (bruin, grijs, groen, blauw,etc)

    // dragen van kleding/voorwerpen
    "hoofd": localStorage.getItem("hoofd"), // dragen van hoeden/mutsen/diadeem etc
    "lichaam": localStorage.getItem("lichaam"), // dragen van gewaden/kleren/uniformen etc
    "stokhand": localStorage.getItem("stokhand"), // dragen van de toverstok
    "sieraad": localStorage.getItem("sieraad"), // dragen van 1 juweel (ring, halsband, armband) 
});
// de inventory van de gebruiker
({
    "items": localStorage.getItem("items"), // het aantal items in de koffer
    "maxitems": localStorage.getItem("maxitems"), // de max-items die toegelaten is in de koffer
    "voorwerpen": localStorage.getItem("voorwerpen"), // array van de voorwerpen die zich bevinden in de koffer
});
// de inventory van de gebruiker
let userTijd = {
    "lastlogin": localStorage.getItem("lastlogin"), // wanneer je laatst ingelogd
    "hongertijd": localStorage.getItem("hongertijd"), // opgeslagen tijd van de honger/hp
    "hygienetijd": localStorage.getItem("hygienetijd"), // opgeslagen tijd van de hygiene/douche
    "slaaptijd": localStorage.getItem("slaaptijd"), // opgeslagen tijd van de slaap/vermoeidheid
    "sociaaltijd": localStorage.getItem("sociaaltijd"), // opgeslagen tijd van sociaal zijn
    "funtijd": localStorage.getItem("funtijd"), // opgeslagen tijd van de entertainment/fun

    "seizoen": localStorage.getItem("seizoen"), // opgeslagen seizoen van het moment
    "weer": localStorage.getItem("weer"), // opgeslagen weer van het moment

    "userdag": localStorage.getItem("userdag"), // laatst opgeslagen dag

};

let guest = [
    "register",
    "404",
    "gasten"
];
let memb = [
    "register"
];
let count;
// GUEST CHECK
async function guestCheck() {
    // als de gebruiker offline of niet bestaand is gaat hij gestuurd worden naar pagina "gasten.html"
    if (user.status === "offline" || user.status === null) {
        count = 0; // zet de count op 0
        for (let x = 0; x < guest.length; x++) {
            if (window.location.pathname === `/${guest[x]}.html`) { // als de pagina waar de gebruiker bevrindt hetzelfde is als 1vd guest array doet hij count +1
                count++;
                break;
            }
        }
        if (count === 0) { // als de gebruiker op een pagina bevindt waar hij niet moet zijn stuurt hij hen naar de "gasten.html"
            location.replace("gasten.html");
        }
    }
}


async function membCheck() {
    // als de gebruiker offline of niet bestaand is gaat hij gestuurd worden naar pagina "gasten.html"
    if (user.status === "online") {
        for (let x = 0; x < memb.length; x++) {
            if (window.location.pathname === `/${memb[x]}.html`) { // als de pagina waar de gebruiker bevrindt hetzelfde is als 1vd guest array doet hij count +1
                location.replace("./index.html");
                break;

            }
        }
 
    }
}

function acces(){
    guestCheck();
    membCheck();
}

let footerText, pageTitle;
let lnav ,rnav;
let d = new Date();

pageTitle = document.querySelector(".page-title").innerHTML;


footerText = `&copy ${sitetitle}`;

document.title = sitetitle + " | " + pageTitle;

acces();

// HTML VOOR DE LINKSE NAVIGATIE
lnav = `

<ul>
    <li>Bartus Krenkt</li>
    <li><a href="./index.html">Voorpagina</a></li>
    <li><a href="./profiel.html">Profiel</a></li>
    <li class="link_item">
        <a href="./uilen.html">Uilen</a>
        <span class="badge">1</span>
    </li>
    <li><a href="./talenten.html">Talenten</a></li>
    <li><a href="#">Instellingen</a></li>
</ul>

<ul>
    <li>Menu</li>
    <li><a href="./dagboeken.html">Dagboeken</a></li>
    <li><a href="./opdrachten.html">Opdrachten</a></li>
    <li><a href="./koffer.html">Koffer</a></li>
    <li><a href="#">Kledingskast</a></li>
    <li><a href="#">De Ochtendprofeet</a></li>
    <li><a href="./reizen.html">Reizen</a></li>
    <li><a href="./winkels.html">Winkelstraat</a></li>
</ul>

<ul>
    <li>Extra</li>
    <li><a href="#">Toverschaak</a></li>
    <li><a href="#">De Loterij</a></li>
    <li><a href="#">Bounty-muur</a></li>
    <li><a href="#">Foppe's vragen</a></li>
</ul>

<ul>
    <li>Wizardkind</li>
    <li><a href="#">Informatie</a></li>
    <li><a href="#">Encyclopedie</a></li>
    <li><a href="#">Disclaimer</a></li>
    <li><a href="#">Privacy Policy</a></li>
</ul>

`,


// HTML VOOR DE RECHTSE NAVIGATIE
rnav = `

<div class="groep_info">
    <img src="./assets/img/zweinstein.png" alt="">
</div>

<div class="gebruikers_info">
    <span>Jellus Kaasvoet</span>
</div>

<div class="locatie_info">
    <div class="locatie">
        <i class='bx bx-current-location'></i>
        <a href="./sluip.html">Wegisweg (noord)</a>
    </div>
    <div class="tijd" x-data="time">
        <i class='bx bx-time-five'></i>
        <span x-text="tijd">22:00</span>
    </div>
    <div class="weer">
        <i class='bx bx-cloud-light-rain'></i>
    </div>
</div>

<div class="progress" x-data="meters">
    <div class="progress_bg" style="width: 100%;">
        <div class="progress_bar" :style="hp">
            <i class='bx bxs-baguette'></i>
            <span x-text="hptext">100%</span>
        </div>
    </div>
    <div class="progress_bg" style="width: 100%;">
        <div class="progress_bar" :style="hygiene">
            <i class='bx bxs-shower'></i>
            <span x-text="hygienetext">25%</span>
        </div>
    </div>
    <div class="progress_bg" style="width: 100%;">
        <div class="progress_bar" :style="slaap">
            <i class='bx bxs-bed'></i>
            <span x-text="slaaptext">55%</span>
        </div>
    </div>
    <div class="progress_bg" style="width: 100%;">
        <div class="progress_bar" :style="sociaal">
            <i class='bx bxs-heart'></i>
            <span x-text="sociaaltext">85%</span>
        </div>
    </div>
    <div class="progress_bg" style="width: 100%;">
        <div class="progress_bar" :style="fun">
            <i class='bx bxs-game'></i>
            <span x-text="funtext">66%</span>
        </div>
    </div>
</div>


`;




// GENERATE BASE LAYOUT
document.addEventListener('alpine:init', () => {
    Alpine.data('temp', () => {
        return {
            header: `<p class='site-title'>${sitetitle}</p>`,
            footer: `<p class='footer-text'>${footerText}</p>`,
            leftnav: `${lnav}`,
            rightnav: `${rnav}`
        }
        


    });
    Alpine.data('time',()=>{
        return {
            tijd: `${d.toLocaleTimeString('nl-NL')}`,
            init(){
              setInterval(() => {
                d = new Date();
                this.tijd = `${d.toLocaleTimeString('nl-NL')}`;
                // checkDag();
                // checkTijd();
              }, 1000);
              
            }
        }

    });


});

// data halen uit de json database

// opslaan van de gebruiker
function setSave(id,value){
    localStorage.setItem(id, value);
}

//reloaden van de pagina
function reLoad$1(id,value){
    // id = "reload", "replace"
    // value = voor bv "index.html" wordt alleen gebruikt met de replace id
    setTimeout(function () {
        switch (id) {
            case "reload":
                location.reload();
                break;
        
            case "replace":
                location.replace(`${value}.html`);
                break;
        }
    }, 1500);

}

let thisDate = new Date();
let hongertijd = userTijd.hongertijd;
let hygienetijd = userTijd.hygienetijd;
let slaaptijd = userTijd.slaaptijd;
let sociaaltijd = userTijd.sociaaltijd;
let funtijd = userTijd.funtijd;

let hp = userStats.hp;
let hygiene = userStats.hygiene;
let slaap = userStats.slaap;
let sociaal = userStats.sociaal;
let fun = userStats.fun;

document.addEventListener('alpine:init', () => {
    Alpine.data('meters', () => {
        return {
            hp: `width: ${hp}%`,
            hptext: `${hp}%`,
            hygiene: `width: ${hygiene}%`,
            hygienetext: `${hygiene}%`,
            slaap: `width: ${slaap}%`,
            slaaptext: `${slaap}%`,
            sociaal: `width: ${sociaal}%`,
            sociaaltext: `${sociaal}%`,
            fun: `width: ${fun}%`,
            funtext: `${fun}%`,

            init() {
                setInterval(() => {
                    thisDate = new Date();
                    // HP SWITCH
                    switch (true) {
                        case (hp != 0 && thisDate.getTime() > hongertijd):
                            hp--;
                            hongertijd = thisDate.setMinutes(thisDate.getMinutes() + 5); // na 5 min - 1hp
                            setSave("hongertijd", hongertijd);
                            setSave("hp", hp);
                            // update meter en tekst
                            this.hp = `width: ${hp}%`;
                            this.hptext = `${hp}%`;
                            console.log("-hp");
                            break;
                        case (hp <= 0):
                            reLoad$1("replace", "404");
                            // je vliegt naar de ziekenzaal + wachtijd van ...
                            break;
                    }                    // HYGIENE SWITCH
                    switch (true) {
                        case (hygiene != 0 && thisDate.getTime() > hygienetijd):
                            hygiene--;
                            hygienetijd = thisDate.setMinutes(thisDate.getMinutes() + 15); // na 15 min - 1 hygiene
                            setSave("hygienetijd", hygienetijd);
                            setSave("hygiene", hygiene);
                            // update meter en tekst
                            this.hygiene = `width: ${hygiene}%`;
                            this.hygienetext = `${hygiene}%`;
                            console.log("-hygiene");
                            break;
                    }                    // SLAAP SWITCH
                    switch (true) {
                        case (slaap != 0 && thisDate.getTime() > slaaptijd):
                            slaap--;
                            slaaptijd = thisDate.setMinutes(thisDate.getMinutes() + 25); // na 25 min - 1 slaap
                            setSave("slaaptijd", slaaptijd);
                            setSave("slaap", slaap);
                            // update meter en tekst
                            this.slaap = `width: ${slaap}%`;
                            this.slaaptext = `${slaap}%`;
                            console.log("-slaap");
                            break;
                    }                    // SOCIAAL SWITCH
                    switch (true) {
                        case (sociaal != 0 && thisDate.getTime() > sociaaltijd):
                            sociaal--;
                            sociaaltijd = thisDate.setMinutes(thisDate.getMinutes() + 45); // na 45 min - 1 sociaal
                            setSave("sociaaltijd", sociaaltijd);
                            setSave("sociaal", sociaal);
                            // update meter en tekst
                            this.sociaal = `width: ${sociaal}%`;
                            this.sociaaltext = `${sociaal}%`;
                            console.log("-sociaal");
                            break;
                    }                    // FUN SWITCH
                    switch (true) {
                        case (fun != 0 && thisDate.getTime() > funtijd):
                            fun--;
                            funtijd = thisDate.setMinutes(thisDate.getMinutes() + 35); // na 35 min - 1 fun
                            setSave("funtijd", funtijd);
                            setSave("fun", fun);
                            // update meter en tekst
                            this.fun = `width: ${fun}%`;
                            this.funtext = `${fun}%`;
                            console.log("-fun");
                            break;
                    }
                }, 1000);

            }
        }

    });
});

// HTML ELEMENTS
const input = document.querySelectorAll("input"); // selecteren van alle input elementen
const select = document.querySelectorAll("select"); // selecteren van alle options elementen

// GASTEN
const bttn_inloggen = document.querySelector("#js_inloggen"); // ID selecten van de inlog button


// SIGNUP
const register = document.querySelector(".register"); // Class selectern van "register"
const bttn_aanmaken = document.querySelector("#js_aanmaken"); // ID selecten van de aanmaak button


// Uilen
document.querySelector("#uilvakin");

document.querySelector("#uilen_onderwerp");
document.querySelector("#uilen_verzender");
document.querySelector("#uilen_inhoud");

// Shops
document.querySelector("#shops");

const buttons = document.querySelectorAll("button");
const sections = document.querySelectorAll(".pagina");


buttons.forEach((btn)=>{
  btn.addEventListener("click", ()=>{
    buttons.forEach((btn)=>{
      btn.classList.remove("active");
    });
    btn.classList.add("active");
    const id = btn.id;
    sections.forEach((section)=>{
      section.classList.remove("active");
    });
    const req = document.getElementsByClassName(`pagina${id}`);
    req[0].classList.add("active");
  });
});

/*   == SIGNUP.JS  ==   
 - aanmaken van de gebruiker - createUser() 
 - inloggen van de gebruiker
 - uitloggen van de gebruiker
*/

// AANMAKEN VAN DE USER
function createUser() {
    let voornaam = register.querySelector("#js_voornaam"); // ID selecteren van de voornaam
    let achternaam = register.querySelector("#js_achternaam"); // ID selecteren van de achternaam
    let geboortedatum = register.querySelector("#js_geboortedatum"); // ID selecteren van de geboortedatum
    let geslacht = register.querySelector("js_#geslacht"); // ID selecteren van het geslacht
    let bloed = register.querySelector("#js_bloed"); // ID selecteren van de bloedzuiverheid
    let school = register.querySelector("#js_school"); // ID selecteren van de school (voorlopig zweinstein)

    let haarstijl = register.querySelector("#js_haarstijl"); // ID selecteren van het type haar
    let haarkleur = register.querySelector("#js_haarkleur"); // ID selecteren van het haarkleur
    let oogkleur = register.querySelector("#js_oogkleur"); // ID selecteren van het oogkleur

    let inputBL, inputcheck, dateCheck, geboortejaar, ditJaar, leeftijd;

    inputcheck = 0;
    input.forEach(i => {
        if (i.value === "") {
            console.log(i.value);
            inputcheck++;
        }
    });
    select.forEach(o => {
        if (o.value === "") {
            console.log(o.value);
            inputcheck++;
        }
    });
    if (inputcheck == 0) {
        inputBL = true;
        geboortejaar = parseInt(geboortedatum.value.substring(0, 4));
        ditJaar = parseInt(d$1.getFullYear());
        leeftijd = ditJaar - geboortejaar;
        switch (true) {
            case (leeftijd < 13):
                break;
            case (leeftijd > 100):
                break

            default:
                dateCheck = true;
                console.log("oke");

                break;
        }
    } else {
        inputBL = false;
    }

    // checken of de user.status al is ingevuld
    // zo niet kan de gebruiker niet registreren
    if (user.status !== null && page == "./register.html") {
        console.log("je kan niet registreren"); // dit wordt een alert
    }
    else if (inputBL === false) {
        // Als er nog lege velden zijn
        console.log("Er zijn nog lege velden!"); // dit wordt een alert
    }
    else if (inputBL === true && dateCheck === true) {
        //invoegen van de values.
        // algemene informatie
        setSave("id", 0);
        setSave("voornaam", voornaam.value);
        setSave("achternaam", achternaam.value);
        setSave("geboortedatum", geboortedatum.value);
        setSave("geslacht", geslacht.value);
        setSave("bloedzuiverheid", bloed.value);

        // school informatie
        setSave("school", school.value);
        setSave("afdeling", "geen");
        setSave("jaar", 0);
        setSave("punten", 0);

        // locatie informatie
        setSave("locatie", "geen");
        setSave("plaats", "geen");

        // meta informatie
        setSave("status", "offline");
        setSave("lastlogin", "niet ingelogd");
        setSave("versie", version);
        setSave("logins", 0);
        setSave("speeltijd", 0);

        //uilen
        setSave("uilen", JSON.stringify(["0", "1"]));

        //algemene statistieken (levels)
        setSave("level", 0);


        //algemene statistieken 
        setSave("hp", 100);
        setSave("maxhp", 100);
        setSave("hygiene", 100);
        setSave("slaap", 100);
        setSave("sociaal", 100);
        setSave("fun", 100);

        //galjoenen, sikkels, knoeten
        setSave("galjoenen", 500);
        setSave("sikkels", 0);
        setSave("knoeten", 0);

        // uiterlijke kenmerken
        setSave("haar", haarstijl.value);
        setSave("haarkleur", haarkleur.value);
        setSave("ogen", oogkleur.value);

        // kleding voorwerpen
        setSave("hoofd", "Niets");
        setSave("lichaam", "Dreuzelkleren");
        setSave("stokhand", "Niets");
        setSave("sieraad", "Niets");

        //koffer
        setSave("items", 0);
        setSave("maxitems", 10);
        setSave("voorwerpen", JSON.stringify({ naam: "aap", type: "health", value: 1 }));

        //tijden
        setSave("hongertijd", d$1.setMinutes(d$1.getMinutes() + 5));
        setSave("hygienetijd", d$1.setMinutes(d$1.getMinutes() + 15));
        setSave("slaaptijd", d$1.setMinutes(d$1.getMinutes() + 25));
        setSave("sociaaltijd", d$1.setMinutes(d$1.getMinutes() + 38));
        setSave("funtijd", d$1.setMinutes(d$1.getMinutes() + 55));

        voornaam.value = "";
        achternaam.value = "";
        geboortedatum.value = "";
        geslacht.value = "";
        bloed.value = "";
        school.value = "";
        haarstijl.value = "";
        haarkleur.value = "";
        oogkleur.value = "";


        console.log("Tis gelukt"); // moet een alert worden en auto login


    }


}
// INLOGGEN VAN DE GEBRUIKER
function loginUser() {

    let loginCount = user.logincount;
    if (user.status === "offline") {
        // Als je wilt inloggen
        setSave("status", "online");
        setSave("logincount", loginCount);
        reLoad("replace", "index");
    } else if (user.status === null) {
        //Als je geen account hebt
        console.log("geen account");
    } else {
        //Als er andere problemen voort doen stuur naar 404 pagina.
        reLoad("replace", "404");
    }


}
// add eventlisteners (alleen als je op de register.html bevindt)


// inlog_button.addEventListener("click", (e) => {
//     e.preventDefault;
//     loginUser();
// })

/* Bundle voor alles wat te maken heeft met de gebruiker.
 - signup.js
 - uilen.js
*/

// SIGNUP -> AANMAKEN
switch (page) {
    case "/register.html":
        bttn_aanmaken.addEventListener("click", (e) => {
            e.preventDefault;
            createUser();
        });
        break;
    case "/gasten.html":
        bttn_inloggen.addEventListener("click",(e)=>{
            e.preventDefault();
            loginUser();
        });
}
