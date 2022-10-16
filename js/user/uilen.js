//UILEN
import { user, userUilen } from "../config/save";
import { getData } from "../modules/funct";
import { page } from "../config/meta"

let aantalUilen = JSON.parse(userUilen.uilen);
let div_notificaties = document.querySelector(".notificaties")
let uilen_lijst = document.querySelector('.uilen_lijst');
let brieven, userBrief, briefID, briefVerzender, briefOnderwerp, briefInhoud;
let li, h2;

let brief_Verzender = document.querySelector("#briefVerzender");
let brief_Datum = document.querySelector("#briefDatum");
let brief_Onderwerp = document.querySelectorAll(".briefOnderwerp");
let brief_Inhoud = document.querySelector("#briefInhoud");
if (user.status === "online" && page === "/uilen.html" && aantalUilen === null ||  user.status === "online" &&   page === "/uilen.html" && aantalUilen.length === 0  ) {
     // als je geen brieven hebt
    div_notificaties.innerHTML = "";
    h2 = document.createElement("h2");
    h2.innerHTML = "Je hebt momenteel geen brieven."
   div_notificaties.appendChild(h2);

} else if (page === "./uilen.html" && user.status === "online") {
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
                        li.classList.add("notificatie", "new_msg");
                        li.innerHTML = ` <span class="badge">0</span>
                            <span>${briefVerzender}</span>
                            <span class="onderwerp">${briefOnderwerp}</span>
                            <span>${new Date().toLocaleTimeString()}</span>`;
                        li.addEventListener("click", (e) => {
                            brief_Verzender.innerHTML = brieven[y].verzender;
                            brief_Datum.innerHTML = new Date().toLocaleDateString();
                            brief_Onderwerp.forEach(element => {
                                element.innerHTML = brieven[y].onderwerp;
                            });
                            brief_Inhoud.innerHTML = brieven[y].inhoud

                        })
                        uilen_lijst.appendChild(li);

                    }
                }
            }
        })

}