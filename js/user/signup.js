/*   == SIGNUP.JS  ==   */
// - aanmaken van de gebruiker - createUser() 
// - inloggen van de gebruiker
// - uitloggen van de gebruiker

// IMPORTEREN VAN EXTERNE MODULES
import "../modules/tabs"; // -> om de tabs van register te laten werken (moet nog veranderd worden)
import { user } from "../config/save"; // -> data ophalen van de user save
import { setSave } from "../modules/funct"; // de setSave() opvragen
import { d, page, version } from "../config/meta"; // info opvragen uit meta
import { input, register } from "../modules/select"; // register div importeren

// AANMAKEN VAN DE USER
export function createUser() {
    let voornaam = register.querySelector("#voornaam"); // ID selecteren van de voornaam
    let achternaam = register.querySelector("#achternaam"); // ID selecteren van de achternaam
    let geboortedatum = register.querySelector("#geboortedatum"); // ID selecteren van de geboortedatum
    let geslacht = register.querySelector("#geslacht"); // ID selecteren van het geslacht
    let bloed = register.querySelector("#bloed"); // ID selecteren van de bloedzuiverheid
    let school = register.querySelector("#school"); // ID selecteren van de school (voorlopig zweinstein)

    let haar = register.querySelector("#haarstijl"); // ID selecteren van het type haar
    let haarKleur = register.querySelector("#haarkleur"); // ID selecteren van het haarkleur
    let ogen = register.querySelector("#oogkleur"); // ID selecteren van het oogkleur

    let inputBL, dateCheck;

    input.forEach(i => {
        (i.value == "") ? inputBL = false : inputBL = true;
    });
    console.log(geboortedatum);

    // checken of de user.status al is ingevuld
    // zo niet kan de gebruiker niet registreren
    if (user.status !== null && page == "./register.html") {
        console.log("je kan niet registreren"); // dit wordt een alert
    }
    else if ( inputBL === false ) {
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
        setSave("uilen", JSON.stringify(["0","1"]));

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
        setSave("hongertijd", d.setMinutes(d.getMinutes() + 5));
        setSave("hygienetijd", d.setMinutes(d.getMinutes() + 15));
        setSave("slaaptijd", d.setMinutes(d.getMinutes() + 25));
        setSave("sociaaltijd", d.setMinutes(d.getMinutes() + 38));
        setSave("funtijd", d.setMinutes(d.getMinutes() + 55));

        cr_voornaam.value = "";
        cr_achternaam.value = "";
        cr_datum.value = "";
        cr_geslacht.value = "";
        cr_bloed.value = "";
        cr_school.value = "";
        cr_haar.value = "";
        cr_haarKleur.value = "";
        cr_ogen.value = "";


        console.log("Tis gelukt"); // moet een alert worden en auto login


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


// inlog_button.addEventListener("click", (e) => {
//     e.preventDefault;
//     loginUser();
// })
