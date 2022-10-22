/*   == SIGNUP.JS  ==   
 - aanmaken van de gebruiker - createUser() 
 - inloggen van de gebruiker
 - uitloggen van de gebruiker
*/

// IMPORTEREN VAN EXTERNE MODULES
import "../modules/tabs"; // -> om de tabs van register te laten werken (moet nog veranderd worden)
import { user, userTijd } from "../config/save"; // -> data ophalen van de user save
import { setSave, reLoad, createAlert } from "../modules/funct"; // de setSave() opvragen
import { d, page, version } from "../config/meta"; // info opvragen uit meta
import { input, register, select } from "../modules/select"; // register div importeren
import { getitem } from "./koffer";

let status = user.status;
let item =  [];

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
        createAlert("Je kan niet registreren.")
    }
    else if (inputBL === false) {
        // Als er nog lege velden zijn
        createAlert("Er zijn nog lege velden!")
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
        setSave("locatie", "ww");
        setSave("plaats", 0);

        // meta informatie
        setSave("status", "offline");
        setSave("lastlogin", "niet ingelogd");
        setSave("versie", version);
        setSave("logincount", 0);
        setSave("speeltijd", 0);
        setSave("sluip", "Nergens");

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
        setSave("ktype", 0);
        setSave("voorwerpen",JSON.stringify(item));

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

        getitem()
        createAlert("Je bent succesvol geregistreerd! Even geduld...<br>Klik daarna op inloggen!")

        reLoad("replace","gasten");
    }


}
// INLOGGEN VAN DE GEBRUIKER
export function loginUser() {
    let loginCount = user.logincount;
    if (status === "offline") {
        // Als je wilt inloggen
        loginCount++
        status = "online";
        setSave("status", status);
        setSave("logincount", loginCount);
        setSave("lastlogin",d.getTime());
        createAlert("Succesvol ingelogd!")
        setTimeout(() => {
            window.location.replace("/index.html")
        }, 500);
    } else if (status === null) {
        //Als je geen account hebt
        createAlert("Je hebt geen account!")
    } else if(status ==="online") {
        //Als er andere problemen voort doen stuur naar 404 pagina.
        reLoad("replace", "404")
    }

}
// UITLOGGEN VAN DE GEBRUIKER
export function logoutUser() {
    status = "offline";
    setSave("status", status)
    reLoad("replace", "index")
}
