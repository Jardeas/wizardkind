import { user, userKoffer, userStats } from "../config/save";
import { page } from "../config/meta";
import { getData, setSave } from "../modules/funct";


let koffer_type = userKoffer.ktype;
let koffer_type_naam, koffer_max_items;


export function getKoffertype() {
    /* KOFFER TYPE  
        Deze functie checkt wat voor koffer je hebt, hierdoor opent je bepaalde functies in het spel.
*/
    switch (koffer_type) {
        case '1':

            koffer_type_naam = "Luxe Koffer";
            return koffer_max_items = 20;

        default:

            koffer_type_naam = "Standaard Koffer";
            return koffer_max_items = 10;

    }


}

// deze functie moet herschreven worden.
export function getitem() {
    let items = JSON.parse(userKoffer.voorwerpen);
    items.push({ db: "drinks", item: 0 }, {db: "owls", item: 3});
    setSave("voorwerpen", JSON.stringify(items))
}


export function getKoffer() {
    /* KOFFER
        Deze functie laat de voorwerpen zien die je hebt zitten.
        Alles wordt geladen vanuit de js/data/../.json
*/
// deze lets moeten allemaal naar select.js
    let koffer_buttons = document.querySelector(".koffer_btns"); 
    let koffer_naam = document.querySelector("#js_koffer_naam");
    let aantal_voorwerpen = document.querySelector("#js_aantal_voorwerpen");
    let max_voorwerpen = document.querySelector("#js_max_voorwerpen");
    let items_container = document.querySelector(".items_container");
    let preview_container = document.querySelector(".preview_container");

    let voorwerpen = JSON.parse(userKoffer.voorwerpen);
    let button;

    // AANSPREKEN VAN DE KOFFER TYPE FUNCTIE 
    getKoffertype() 
    preview_container.innerHTML = "Klik op een voorwerp." // injecteren van een de start tekst
    // als je een standaard koffer hebt, heb je geen filter
    if (userKoffer.ktype == 0) {
        koffer_buttons.innerHTML = "<br>";
    }

    // INJECTEREN VAN DE HTML MET DE BASIS INFORMATIE.
    koffer_naam.innerHTML = koffer_type_naam; // KOFFER NAAM
    aantal_voorwerpen.innerHTML = voorwerpen.length; // AANTAL VOORWERPEN
    max_voorwerpen.innerHTML = koffer_max_items; // MAX ITEMS TOEGELATEN VOLGENS KOFFER TYPE

    // INVOEGEN VAN DE ITEMS
    if (voorwerpen.length === 0) {
        // ALS JE GEEN VOORWERPEN HEBT : 
        items_container.innerHTML = "Je hebt geen voorwerpen in je koffer."
    } else {

        items_container.innerHTML = ""; // RESETTEN VAN DE ITEMS_CONTAINERS
        for (let x = 0; x < voorwerpen.length; x++) {
            // button aanmaken
            button = document.createElement("button");
            button.type = "button"; // type van de bttn
            button.innerHTML = `<img src="./assets/items/${voorwerpen[x]["db"]}/${voorwerpen[x]["item"]}.svg" alt="">`; // img vd button

            button.addEventListener("click", (e)=>{
                e.preventDefault;
                // OPVRAGEN VAN DE DATA VOOR HET VOORWERP
                getData("items", voorwerpen[x]["db"])
                .then(items =>{

                    let db_item = items.db.items[voorwerpen[x]["item"]]
                    preview_container.innerHTML = `
                    <div class="preview">
                                    <h4>${db_item.naam}</h4>
                                    <div class="preview_img">
                                        <img src="./assets/items/${voorwerpen[x]["db"]}/${voorwerpen[x]["item"]}.svg" alt="">
                                    </div>
                                </div>
                                <!-- PREVIEW INFO -->
                                <div class="preview_info">
                                    <p>${db_item.omschrijving}</p>
                                    
                                  
                                </div>
                                `
                })
            })

            items_container.appendChild(button)

        }
    }


}