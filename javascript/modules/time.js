/*  ### TIME.js ###                             ->  READ ME  <- 
        hopsa
*/

import { time_module } from "../config/settings";
import { locations } from "./elements";
import { createAlert, loadUser, setSave } from "./functies";


let user_day = loadUser.user_day;
let logout_time,
    check_status,
    season,
    weather,
    day_night;                  // true = dag , false = nacht

let random_int;

// DATUMS/TIJD
export const d = new Date();
const min = d.getMinutes();
const hour = d.getHours();
const day = d.getDay();
const month = d.getMonth();
const year = d.getFullYear();

/* AUTOLOGOUT                                   ->  READ ME  <- 
    Deze functie laat je uitloggen in x aantal dagen
    Dit kan je instellen in de config/settings.js file
    
    Deze functie staat hierbij omdat deze tijdsgebonden is.*/
function autoLogout() {
    logout_time = loadUser.last_login + time_module.logout_time;    // De time_module.logout_time is standaard ingesteld op 3 dagen.
    if (d.getTime() >= logout_time) {
        check_status = false;                                       // false = offline
        setSave("status", check_status);                            // opslaan van de offline status (false)
        window.location.replace("/index.html")                      // versturen naar de index
        createAlert("Je bent uitgelogd!");                          // Alert maken dat je uitgelod bent
    }
}
/* SEIZOEN EN WEER CONDITIES                    ->  READ ME  <- 
    uitleg*/
function setConditions() {
    function setWeather(x, y, z, w) {
        /*   Uitleg values/weer                   ->  READ ME  <-
            
        VALUES
            x : 0 - 25
            y : 25 - 50
            z : 50 - 75
            w : 75 - 100
            
        Soorten weer   
            - cloudy                  
            - rain
            - storm
            - snow
            - snowstorm
            - sun*/
        random_int = Math.floor(Math.random() * 100);
        switch (true) {
            case (random_int <= 25):
                return weather = x
            case (random_int <= 50):
                return weather = y
            case (random_int <= 75):
                return weather = z
            case (random_int <= 100):
                return weather = w
            default:
                break;
        }
    }
    // Checken welk seizoen het is.
    switch (time_module.conditions === true) {
        case (month < 2 || month == 11):                        // spreekt voor zich denk ik
            season = "winter";
            setWeather("rain","snow","snow","snowstorm")        // De values zijn afhankelijk van de functie zie hierboven.
            break;
        case (month < 5):
            season = "spring";
            setWeather("rain","cloudy","sun","sun")
            break;
        case (month < 8):
            season = "summer";
            setWeather("cloudy","sun","sun","sun")
            break;
        case (month < 11):
            season = "autumn";
            setWeather("cloudy","rain","rain","storm")
            break;
        default:
            break;
    }
}
/* TIJD UPDATE                                  ->  READ ME  <-
uitleg */
function checkTime(){
    function checkPage(){               // Deze functie is enkel bedoeld om bepaalde paginas te sluiten als het nacht is .
        switch (page) {
            case "/location.html":
                locations.container.innerHTML = "De winkels zijn momenteel gesloten."
                break;
        
            default:
                break;
        }
    }
    switch (true) {
        // DAG
        case (hour > 6 && hour < 19):           
            day_night = true;
            break;
             // NACHT
        case (hour > 19 && hour < 6):          
            day_night = false;
            checkPage()                         // checkPage functie uitvoeren
            break;
        default:
            break;
    }
}
/* DAG UPDATE                                   ->  READ ME  <-         ---> UPDATE NODIG
    Deze functie checkt of dat er een dag is gepasseerd. 
        Is deze in werking zal hij deze functies uitvoeren :
                -
                -
                - */
function dayUpdate(){
    if(user_day != day){                   
        setSave("user_day",day);
        return user_day = day;
    }
}
