'use strict';

const sitetitle = "Wizardkind";

/*
Hier staat alle informatie opgeslaan van de gebruiker

versie 1.0
*/

// informatie over de gebruiker
({
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
});
// uilen
({
    "uilen": localStorage.getItem("uilen") // de array met brieven
});
// opgeslagen statistieken
({
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

});
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
({
    "lastlogin": localStorage.getItem("lastlogin"), // wanneer je laatst ingelogd
    "hongertijd": localStorage.getItem("hongertijd"), // opgeslagen tijd van de honger/hp
    "hygienetijd": localStorage.getItem("hygienetijd"), // opgeslagen tijd van de hygiene/douche
    "slaaptijd": localStorage.getItem("slaaptijd"), // opgeslagen tijd van de slaap/vermoeidheid
    "sociaaltijd": localStorage.getItem("sociaaltijd"), // opgeslagen tijd van sociaal zijn
    "funtijd": localStorage.getItem("funtijd"), // opgeslagen tijd van de entertainment/fun

    "seizoen": localStorage.getItem("seizoen"), // opgeslagen seizoen van het moment
    "weer": localStorage.getItem("weer"), // opgeslagen weer van het moment

    "userdag": localStorage.getItem("userdag"), // laatst opgeslagen dag

});

let footerText, pageTitle;
let lnav ,rnav;
let d = new Date();

pageTitle = document.querySelector(".page-title").innerHTML;


footerText = `&copy ${sitetitle}`;

document.title = sitetitle + " | " + pageTitle;

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

<div class="gebruikers_info" x-data="user_info">
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
