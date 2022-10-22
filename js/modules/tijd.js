// deze script bepaald de tijd van het spel, houdt ook rekening met kalender events, seizoenen, weer, dag en nacht
import { page } from "../config/meta";
import { user, userTijd } from "../config/save";
import { logoutUser } from "../user/signup";
import { setSave } from "./funct";
// import { opening } from "./select";

const d = new Date();
const jaar = d.getFullYear();
const maand = d.getMonth();
const dag = d.getDay();
const uur = d.getHours();
const min = d.getMinutes();
let userdag = userTijd.userdag;

// SEIZOENEN GEBASSEERD OP DE MAAND
function setSeizoen() {
    /* SEIZOENEN
     winter = tussen maand 11 en 2
     lente = tussen maand 2 en 5
     zomer = tussen maand 5 en 8
     herfst = tussen maand 8 en 11
    */
  if (maand == 11 && maand <= 2) {
        setSave("seizoen", "winter");
    }
    else if (maand >= 2 && maand <= 5) {
        setSave("seizoen", "lente")
    }
    else if (maand >= 5 && maand <= 8) {
        setSave("seizoen", "zomer")
    }
    else if (maand >= 8 && maand <= 11) {
        console.log("herfst");
        setSave("seizoen", "herfst")
    }
}

// WEEROMSTANDIGHEDEN GEBASSEERD OP DE SEIZOEN
function setWeer() {
    let seizoen = userTijd.seizoen;
    let percent = Math.floor(Math.random() * 100);
    switch (seizoen) {
        case "winter":

            if (percent >= 0 && percent <= 5) {
                setSave("weer", "zonnig");
                console.log("zonnig");
            }
            else if (percent >= 5 && percent <= 50) {
                setSave("weer", "regen");
                console.log("regen");
            }
            else if (percent >= 50 && percent <= 75) {
                setSave("weer", "sneeuw");
                console.log("sneeuw");
            }
            else if (percent >= 75 && percent <= 100) {
                setSave("weer", "sneeuwstorm");
                console.log("sneeuwstorm");
            }
            else {
                console.log("error");
            }
            break;
        case "herfst":
            if (percent >= 0 && percent <= 15) {
                setSave("weer", "zonnig");
                console.log("zonnig");
            }
            else if (percent >= 15 && percent <= 25) {
                setSave("weer", "wisselvallig");
                console.log("wisselvallig");
            }
            else if (percent >= 25 && percent <= 65) {
                setSave("weer", "regen");
                console.log("regen");
            }
            else if (percent >= 65 && percent <= 100) {
                setSave("weer", "storm");
                console.log("storm");
            }
            else {
                console.log("error");
            }
            break;
        default:
            break;
    }
}
// DE AUTOLOGOUT FUNCTIE
export function autoLogout(){
    let logout_time = JSON.parse(userTijd.lastlogin) + 259200000;
    if(d.getTime() >= logout_time){
        logoutUser()
    }
}

// deze functie checkt of dat er een dag wisseling is.
export function checkDag() {
    if (userdag != dag ) {
        setSave("userdag", dag);
        setSeizoen();
        setWeer();
        userdag = dag;
    }
}

export function checkTijd() {
    let winkels = document.querySelector(".wegisweg_container");
    
    // Dag en Nacht
  switch (true) {
    // NACHT
    case (page == "/locaties.html" && uur >= 23 || uur <= 6 ):
        winkels.innerHTML = "De winkels zijn gesloten kom later terug!"
        setSave("sluip", "Wegisweg");
        break;
    default:
        // DAG
        break;
  }
}
