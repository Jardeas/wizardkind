import { container_div, create_button, create_div, create_p } from "./elements";
export let loadUser,saveUser;
/* DATA UIT DE DATABASE HALEN                                   READ ME !!
    getData(mp,p) om informatie uit de database te halen.
        de databases kan je vinden in ./js/data/..

        - p = path
        - f = filename
*/
export async function getData(p, f) {
    const response = await fetch(`../js/data/${p}/${f}.json`)
    const data = await response.json();
    return data
}
/* ELEMENTEN SELECTEREN                                         READ ME !!
 
Deze functie selecter een element vanuit de html pagina.
e = 'html' (html element bv h2)
e = 'id' (html element die gezocht wordt met . #)
e = 'class' (html element die gezocht wordt met de .)

input = de juiste benaming.
*/
export function selectElement(e, input) {

    switch (e) {
        case "class":
            // CLASS selecteren
            return document.querySelectorAll(`.${input}`);
        case "html":
            // html selecteren
            return document.querySelector(`${input}`);
        default:
            // ID slecteren
            return document.querySelector(`#${input}`);
    }

}
/* ALERT FUNCTIE                                                READ ME !!
    Met de alert functie komt er een popup op de pagina. Hiermee kan je berichten duidelijk weergeven.
    Geef de 'input' door als string.
*/
export function createAlert(input) {
    // VARIABLEN
    let alert,
        text,
        close_button;

    // CREATE ELEMENT TOEVOEGEN AAN DE VARS
    alert = create_div;
    close_button = create_button;
    text = create_p;

    alert.classList.add("alert"); // alert class toevoegen
    text.innerHTML = input;

    close_button.classList.add("cross"); // cross class toevoegen
    close_button.type = "button"; // type definieren
    close_button.innerHTML = "<i class='bx bx-x'></i>"; // X toevoegen aan de button

    // eventlistener om de alert te kunnen sluiten
    close_button.addEventListener("click", (e) => {
        e.preventDefault;
        alert.remove();
    });
    // TOEVOEGEN AAN DE PAGINA 
    alert.appendChild(text);
    alert.appendChild(close_button);
    container_div.appendChild(alert);
}
/* SAVE FILE ->                                                 READ ME !!

De save file bestaat uit 2 functies
    - setSave()
    - getSave()

    Bij beide functies moet je een id meegeven
        er zijn verschillende ids ;

        USER
            - pasport               -> de ID van de gebruiker 
            - name                  -> voornaam van de gebruiker
            - last_name             -> achternaam van de gebruiker
            - birth_date            -> geboortedatum van de gebruiker
            - sex                   -> geslacht van de gebruiker
            - purity                -> bloedzuiverheid van de gebruiker
        STATS
            - level                 -> de level van de gebruiker
            - skill_1               -> level van skill 1
            - skill_2               -> level van skill 2
            - skill_3               -> level van skill 3
                    (je kan skills toevoegen)

            - hp                    -> de levenspunten van de gebruiker (wordt ook gebruiker voor 'honger')
            - max_hp                -> de max levenspunten die gebruiker kan hebben (wordt ook gebruikt voor 'honger') 
        SIM
            - hygiene               -> de punten van hygiene van de gebruiker
            - fatigue               -> de vermoeidheid van de gebruiker
            - social                -> sociale behoeften van de gebruiker
            - fun                   -> de entertainment die de gebruiker nodig heeft
            - knowledge             -> de behoefte achter kennis.

        CHARACTER
            - hair_style            -> stijl van het haar
            - hair_color            -> kleur van het haar
            - eye_color             -> kleur van de ogen

            - head_wear             -> wat de gebruiker op zen hoofd draagt
            - body_wear             -> wat de gebruiker aan heeft lichaams gewijs
            - main_hand             -> het wapen van de gebruiker
            - other_hand            -> wat de gebruikeren in de andere hand kan dragen
            - jewellery_wear         -> het dragen van sierraden en juwelen
        META
            - status                -> tue = online / false = offline
            - version               -> versie waar de gebruiker in speelt
            - login_count           -> de aantal logins
            - play_time             -> de speeltijd van de gebruiker
            - gold                  -> het aantal gold coins
            - silver                -> het aantal zilver coins
            - brons                 -> het aantal bronzen coins
            
        SCHOOL
            - school                -> school waar de gebruiker is ingeschreven
            - house                 -> de afdeling waar de gebruiker in zit
            - year                  -> het jaar waar de gebruiker zich bevindt
            - points                -> de verzamelde punten in het betreffende jaar
        LOCATIONS
            - location              -> de locatie waar de speler bevindt (location_1 / location_2)
            - place                 -> de plaats waar de gebruiker zich bevindt (0 , 1 , 2 van een location)
            - place_name            -> de benaming waar de gebruiker zich in bevindt (bv "Stad 1")
        POSTVAK IN
            - inbox                 -> alle berichten van de gebruiker (array met objects)
        INVENTORY
            - inventory_type        -> type van de inventory (dit om te weten hoeveel items erin zitten of andere extra functies)
            - inventory             -> de items die in de inventory zitten (array met objects)
        TIME
            - last_login            -> de opgeslagen millieseconden van de laatste login (dit is voor de autolog functie)
            - user_day              -> laatste opgeslagen dag (dit is voor de dag update)
            - hp_time               -> opgeslagen tijd van de laatste hp aftrekking
            - hygiene_time          -> opgeslagen tijd van de laatste hygiene aftrekking
            - fatigue_time          -> opgeslagen tijd van de laatste vermoeidheid aftrekking
            - social_time           -> opgeslagen tijd van de laatste sociale aftrekking
            - fun_time              -> opgeslagen tijd van de laatste fun aftrekking
            - knowledge_time        -> opgeslagen tijd van de laatste kennis aftrekking
    */
export function setSave(id, value) {
    return localStorage.setItem(id, JSON.stringify(value));
}
function getSave(id) {
    return JSON.parse(localStorage.getItem(id));
}
loadUser = {
    pasport: getSave('pasport'),
    name: getSave('name'),
    last_name: getSave('last_name'),
    birth_date: getSave('birth_date'),
    sex: getSave('sex'),
    purity: getSave('purity'),

    level: getSave('level'),
    skill_1: getSave('skill_1'),
    skill_2: getSave('skill_2'),
    skill_3: getSave('skill_3'),
    hp: getSave('hp'),
    max_hp: getSave('max_hp'),

    hygiene: getSave('hygiene'),
    fatigue: getSave('fatigue'),
    fatigue: getSave('social'),
    fun: getSave('fun'),
    knowledge: getSave('knowledge'),

    hair_style: getSave('hair_style'),
    hair_color: getSave('hair_color'),
    eye_color: getSave('eye_color'),


    head_wear: getSave('head_wear'),
    body_wear: getSave('body_wear'),
    main_hand: getSave('main_hand'),
    other_hand: getSave('other_hand'),
    jewellery_wear: getSave('jewellery_wear'),

    status: getSave('status'),
    version: getSave('version'),
    login_count: getSave('login_count'),
    play_time: getSave('play_time'),
    gold: getSave('gold'),
    silver: getSave('silver'),
    brons: getSave('brons'),

    school: getSave('school'),
    house: getSave('house'),
    year: getSave('year'),
    points: getSave('points'),

    location: getSave('location'),
    place:getSave('place'),
    place_name: getSave('place_name'),

    inbox: getSave('inbox'),

    inventory_type: getSave('inventory_type'),
    inventory: getSave('inventory'),
 
    last_login: getSave('last_login'),
    user_day: getSave('user_day'),
    hp_time: getSave('hp_time'),
    hygiene_time: getSave('hygiene_time'),
    fatigue_time: getSave('fatigue_time'),
    social_time: getSave('social_time'),
    fun_time: getSave('fun_time'),
    knowledge_time: getSave('knowledge_time'),
}
