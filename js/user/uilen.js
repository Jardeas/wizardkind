//UILEN
import { user, userUilen } from "../config/save";
import { getData } from "../modules/funct";
import { page } from "../config/meta"

let aantalUilen = JSON.parse(userUilen.uilen);
let uilen = document.querySelector(".uilen")
let uilen_lijst = document.querySelector('.uilen_container');
let brieven, userBrief, briefID, briefVerzender, briefOnderwerp, briefInhoud;
let li, h2;

let brief_Verzender = document.querySelector("#js_verzender");
let brief_Datum = document.querySelector("#js_datum");
let brief_Onderwerp = document.querySelectorAll(".js_onderwerp");
let brief_Inhoud = document.querySelector("#js_inhoud");
export function checkUilen() {
    if (user.status === "online" && page === "/uilen.html" && aantalUilen === null || user.status === "online" && page === "/uilen.html" && aantalUilen.length === 0) {
        // als je geen brieven hebt
       uilen.innerHTML = "";
        h2 = document.createElement("h2");
        h2.innerHTML = "Je hebt momenteel geen brieven.";
        uilen.appendChild(h2);

    } else if (page === "/uilen.html" && user.status === "online") {
        getData("uilen", "brieven")
            .then(data => {
                brieven = data.brieven; // zijn de brieven in de database
                for (let x = 0; x < aantalUilen.length; x++) {
                    userBrief = aantalUilen[x]; // zijn de brieven die de gebruiker heeft 
                    for (let y = 0; y < brieven.length; y++) {
                        briefID = brieven[y].id;
                        briefVerzender = brieven[y].verzender;
                        briefOnderwerp = brieven[y].onderwerp;
                        briefInhoud = brieven[y].inhoud;
                        if (userBrief == brieven[y].id) {
                            // hier moet de html ingeplaatst worden
                            li = document.createElement('li');
                            li.classList.add("uil", "uil_new");
                            li.innerHTML = ` <i class='bx bxs-envelope' ></i>
                            <span class="naam">${briefVerzender}</span>
                            <span class="onderwerp">${briefOnderwerp}</span>
                            <span class="datum">${new Date().toLocaleTimeString()}</span>
                            <button type="button" class="cross"><i class='bx bx-x' ></i></button>`;
                            li.addEventListener("click", () => {
                                brief_Verzender.innerHTML = brieven[y].verzender;
                                brief_Datum.innerHTML = new Date().toLocaleDateString();
                                brief_Onderwerp.forEach(element => {
                                    element.innerHTML = brieven[y].onderwerp;
                                });
                                brief_Inhoud.innerHTML = brieven[y].inhoud;

                            })
                            uilen_lijst.appendChild(li);

                        }
                    }
                }
            })

    }
}