import { user } from "../config/save";
import { reLoad, setSave } from "../modules/funct";
import { page, version } from "../config/meta";


let aanmaak_bttn = document.querySelector('#aanmaak-bttn'); // ID selecteren van aanmaak button
let inlog_button = document.querySelector("#inlog-bttn"); // ID selecteren van inlog button
// AANMAKEN VAN DE USER
function createUser() {
    let d = new Date();
    let cr_voornaam = document.querySelector("#cr-voornaam"); // ID selecteren van cr-voornaam
    let cr_achternaam = document.querySelector("#cr-achternaam"); // ID selecteren van cr-achternaam
    let cr_datum = document.querySelector("#cr-datum"); // ID selecteren van cr-verjaardag
    let cr_geslacht = document.querySelector("#cr-geslacht"); // ID selecteren van cr-geslacht
    let cr_bloed = document.querySelector("#cr-bloed"); // ID selecteren van cr-geslacht
    let cr_school = document.querySelector("#cr-school"); // ID selecteren van cr-school

    let cr_haar = document.querySelector("#cr-haar"); // ID selecteren van cr-haar
    let cr_haarKleur = document.querySelector("#cr-haarKleur"); // ID selecteren van cr-haarKleur
    let cr_ogen = document.querySelector("#cr-ogen"); // ID selecteren van cr-haar

    if (user.status !== null) {
        // checken of de user.status al is ingevuld
        // zo niet kan de gebruiker niet registreren
        console.log("je kan niet registreren");
    }
    else if (
        cr_voornaam.value === "" ||
        cr_achternaam.value === "" ||
        cr_datum.value === "" ||
        cr_geslacht.value === "" ||
        cr_bloed.value === "" ||
        cr_school.value === "" ||
        cr_haar.value === "" ||
        cr_haarKleur.value === "" ||
        cr_ogen.value === "") {

        // Als er nog lege velden zijn
        console.log("Er zijn nog lege velden!");
    }
    else {
        //invoegen van de values.
        // algemene informatie
        setSave("id", 0);
        setSave("voornaam", cr_voornaam.value);
        setSave("achternaam", cr_achternaam.value);
        setSave("geboortedatum", cr_datum.value);
        setSave("geslacht", cr_geslacht.value);
        setSave("bloedzuiverheid", cr_bloed.value);

        // school informatie
        setSave("school", cr_school.value);
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
        setSave("uilen", JSON.stringify(["0"]));

        //algemene statistieken (levels)
        setSave("level", 0);
        setSave("toverkunde", 0);
        setSave("brouwkennis", 0);

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
        setSave("haar", cr_haar.value);
        setSave("haarkleur", cr_haarKleur.value);
        setSave("ogen", cr_ogen.value);

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
        setSave("hongertijd", d.setMinutes(d.getMinutes() + 5));
        setSave("hygienetijd", d.setMinutes(d.getMinutes() + 15));
        setSave("slaaptijd", d.setMinutes(d.getMinutes() + 25));
        setSave("sociaaltijd", d.setMinutes(d.getMinutes() + 45));
        setSave("funtijd", d.setMinutes(d.getMinutes() + 35));

        cr_voornaam.value = "";
        cr_achternaam.value = "";
        cr_datum.value = "";
        cr_geslacht.value = "";
        cr_bloed.value = "";
        cr_school.value = "";
        cr_haar.value = "";
        cr_haarKleur.value = "";
        cr_ogen.value = "";


        console.log("Tis gelukt");
     
        
    }

}
// INLOGGEN VAN DE GEBRUIKER
function loginUser() {

    let loginCount = user.logincount;
    if (user.status === "offline") {
        // Als je wilt inloggen
        setSave("status", "online");
        setSave("logincount", loginCount)
        reLoad("replace", "index")
    } else if (user.status === null) {
        //Als je geen account hebt
        console.log("geen account");
    } else {
        //Als er andere problemen voort doen stuur naar 404 pagina.
        reLoad("replace", "404")
    }


}
// UITLOGGEN VAN DE GEBRUIKER
function logoutUser() {
    setSave("status", "offline")
    reLoad("replace", "index")
}
// add eventlisteners (alleen als je op de register.html bevindt)
if (page === "/register.html") {
    aanmaak_bttn.addEventListener("click", (e) => {
        e.preventDefault;
        createUser()
    })
    inlog_button.addEventListener("click", (e) => {
        e.preventDefault;
        loginUser();
    })
}