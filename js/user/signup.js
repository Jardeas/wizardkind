/*   == SIGNUP.JS  ==   
 - aanmaken van de gebruiker - createUser() 
 - inloggen van de gebruiker
 - uitloggen van de gebruiker
*/

// IMPORTEREN VAN EXTERNE MODULES
import "../modules/tabs"; // -> om de tabs van register te laten werken (moet nog veranderd worden)
import { user } from "../config/save"; // -> data ophalen van de user save
import { setSave, reLoad } from "../modules/funct"; // de setSave() opvragen
import { d, page, version } from "../config/meta"; // info opvragen uit meta
import { input, register, select } from "../modules/select"; // register div importeren

let status = user.status;

// AANMAKEN VAN DE USER
export function createUser() {
    let voornaam = register.querySelector("#js_voornaam"); // ID selecteren van de voornaam
    let achternaam = register.querySelector("#js_achternaam"); // ID selecteren van de achternaam
    let geboortedatum = register.querySelector("#js_geboortedatum"); // ID selecteren van de geboortedatum
    let geslacht = register.querySelector("#js_geslacht"); // ID selecteren van het geslacht
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
            inputcheck++
        }
    });
    if (inputcheck == 0) {
        inputBL = true;
        geboortejaar = parseInt(geboortedatum.value.substring(0, 4));
        ditJaar = parseInt(d.getFullYear());
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
        setSave("hongertijd", d.setMinutes(d.getMinutes() + 5));
        setSave("hygienetijd", d.setMinutes(d.getMinutes() + 15));
        setSave("slaaptijd", d.setMinutes(d.getMinutes() + 25));
        setSave("sociaaltijd", d.setMinutes(d.getMinutes() + 38));
        setSave("funtijd", d.setMinutes(d.getMinutes() + 55));

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
export function loginUser() {

    let loginCount = user.logincount;
    if (status === "offline") {
        // Als je wilt inloggen
        status = "online";
        setSave("status", status);
        setSave("logincount", loginCount)
        setTimeout(() => {
            window.location.replace("/index.html")
        }, 1500);
    } else if (status === null) {
        //Als je geen account hebt
        console.log("geen account");
    } else if(status ==="online") {
        //Als er andere problemen voort doen stuur naar 404 pagina.
        reLoad("replace", "index")
    }


}
// UITLOGGEN VAN DE GEBRUIKER
function logoutUser() {
    status = "offline";
    setSave("status", status)
    reLoad("replace", "index")
}
