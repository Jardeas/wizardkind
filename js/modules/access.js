import { user } from "../config/save";

let guest = [
    "register",
    "404",
    "gasten"
];
let memb = [
    "register",
    "gasten"
];
let count;
// GUEST CHECK
async function guestCheck() {
    // als de gebruiker offline of niet bestaand is gaat hij gestuurd worden naar pagina "gasten.html"
    if (user.status === "offline" || user.status === null) {
        count = 0; // zet de count op 0
        for (let x = 0; x < guest.length; x++) {
            if (window.location.pathname === `/${guest[x]}.html`) { // als de pagina waar de gebruiker bevrindt hetzelfde is als 1vd guest array doet hij count +1
                count++
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
                location.replace("./404.html");
                break;

            }
        }
 
    }
}

export function acces(){
    guestCheck();
    membCheck();
}