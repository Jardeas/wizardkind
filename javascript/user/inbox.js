/*  ### INBOX.js ###                             -> READ ME <-
    
        De gebruiker zijn berichten zijn opgeslaan in de "userload.inbox", dit wordt in een object opgeslaan in een array.
            Deze script doet de volgende dingen;
                - Berichten vanuit de array halen en vergelijken met de "database"
                - Ongelezen/gelezen berichten zien
                - Awards die aan de berichten hangen openen

                De volgende files zijn hieraan verbonden;
                    - data/inbox/messages.js (hier zitten alle berichten in)
                    - data/inbox/awards.js (hier zitten alle awards in)

            Ook kan de admin een custom message versturen (moet nog gemaakt worden)

            NOTE: de inbox_module in config/settings.js moet op "true" staan, alsook van de award_module moet op "true" staan om de awards te kunnen laten werken.


    ##### VOLGENDE UPDATE #####
        HTML ids en classes veranderen naar de objecten van elements.js
*/

import { award_module, inbox_module } from "../config/settings";
import { awards } from "../data/inbox/awards";
import { messages, no_message } from "../data/inbox/messages";
import { inbox } from "../modules/elements";
import { createAlert, loadUser, setSave } from "../modules/functies";

// VARIABLEN 

// DATABASE
let db_messages,
    db_messages_id,
    db_messages_sender,
    db_messages_subject,
    db_messages_content;

// USER

let user_message,
    user_message_id,
    user_message_date,
    user_message_read,
    user_message_award,
    user_message_award_boolean;


// OTHER
let no_message_h2,
    message_li,
    close_button,
    open_reward_button,
    inventory,
    amount,
    x,
    y;



/* OPVRAGEN VAN DE BERICHTEN                        READ ME !!          ----> UPDATE inbox module erin plaatsen.
        Met deze functie kan je de berichten opvragen op de pagina inbox.html
 */
export async function getInbox() {
    // --- GEEN BERICHTEN IN DE INBOX --- //
    if ((loadUser.inbox.length === null) || (loadUser.inbox.length === 0)) {
        inbox.div.innerHTML = "";                   // leeg maken van inbox_div
        inbox.message_div.innerHTML = "";           // leeg maken van inbox_message_div
        no_message_h2 = create_h2;                  // aanmaken van een H2
        no_message_h2.innerHTML = no_message;
        inbox.div.appendChild(no_message_h2);
    }
    // --- BERICHTEN IN DE INBOX --- //
    else {
        db_messages = messages;                                 // de array uit messages.js halen
        for (x = 0; x < loadUser.inbox.length; x++) {
            user_message = loadUser.inbox[x];               // het bericht in user_message steken
            user_message_id = x;                    // de id in user_message_id plaatsen
            user_message_read = loadUser.inbox[x].message_read;   // checken of het bericht al is gelezen
            user_message_award = loadUser.inbox[x].awards;         // checken of bericht een award heeft
            user_message_award_boolean = loadUser.inbox[x].awards_boolean;      // als de boolean false is kan je het geschenk openen
            for (y = 0; y < db_messages.length; y++) {
                db_messages_id = y;                            // de message ID in db_message_id plaatsen
                db_messages_sender = db_messages[y].sender;     // de message verzender in  db_message_sender plaatsen
                db_messages_subject = db_messages[y].subject;   // de message onderwerp in db_message_subject plaatsen
                db_messages_content = db_messages[y].content;   // de message inhoud in de db_message_content plaatsen
                if (user_message == db_messages_id) {             // Als de user_message gelijk is aan de ID van de message id
                    // --- AANMAKEN VAN HET BERICHT --- // 
                    message_li = create_li;                     // Aanmaken van een li element
                    switch (user_message_read) {                // Checken of het bericht al is gelezen (false is nieuw, true is gelezen)
                        case false:
                            message_li.classList.add('uil');
                            message_li.innerHTML = `<i class='bx bxs-envelope-open'></i>`;
                            break;
                        default:
                            message_li.classList.add('uil', 'uil_new');
                            message_li.innerHTML = `<i class='bx bxs-envelope'></i>`;
                            break;
                    }

                    message_li.innerHTML +=                                 // Invoegen van de HTML in de li 
                        `<span class="naam">${db_messages_sender}</span>        
                    <span class="onderwerp">${db_messages_subject}</span>
                    <span class="datum">${user_message_date}</span>`;

                    // --- WEERGEVEN VAN EEN BERICHT --- //
                    message_li.addEventListener('click', () => {             // Eventlistener plaatsen op de li
                        inbox.message.sender_li.innerHTML = db_messages_sender;       // Injecteren gegevens van de verzender
                        inbox.message.subject_li.innerHTML = db_messages_subject;     // injeceren onderwerp van het bericht
                        inbox.message.date_li.innerHTML = user_message_date;          // Injecteren van de datum 
                        inbox.message.content_li.innerHTML = db_messages_content;     // Injecteren van de inhoud van het bericht
                        user_message_read = true;                              // Ongelezen = false, na de klik op true.
                        // --- CHECKEN OF JE EEN AWARD HEBT --- //
                        switch (award_module && user_message_award.isInteger()) {                      // Als er een cijfer staat in deze variable gaat hij de switch uitvoeren + als de award_module aanstaat
                            case true:
                                inbox.message.award.name_h5.innerHTML = awards[user_message_award].name;             // Injecteren van de "Award name"
                                inbox.message.award.content_p.innerHTML = awards[user_message_award].content;        // Injecteren van de "Award inhoud"
                                open_reward_button = create_button;                                             // Aanmaken button
                                if (user_message_award_boolean === false) {                                     // Als het geschenk nog niet open is (false)
                                    open_reward_button.innerHTML = `<i class='bx bxs-folder'></i>`;             // Injecteren van de HTML in de button
                                    open_reward_button.addEventListener("click", () => {                        // Event listener voor het openen vd award
                                        inventory = loadUser.inventory;                                         // Inhoud vd gebruikers inventory in "inventory" steken
                                        loadUser.gold = loadUser.gold + awards[user_message_award].g;           // Gebruikers gold inladen + de award gold toevoegen
                                        loadUser.silver = loadUser.silver + awards[user_message_award].s;       // Zelfde met zilver
                                        loadUser.brons = loadUser.brons + awards[user_message_award].b;         // Zelfde met brons
                                        awards[user_message_award].items.forEach(item => {                      // De items vd award inladen in de inventory.
                                            inventory.join(item)
                                        });
                                        user_message_award_boolean = true;                                      // Het geschenk op "geopend" (true) plaatsen
                                        // OPSLAAN VAN DE GEGEVENS
                                        setSave("inventory", inventory);
                                        setSave("gold", loadUser.gold);
                                        setSave("silver", loadUser.silver);
                                        setSave("brons", loadUser.brons);
                                        setSave("messages", loadUser.inbox);
                                    });
                                }
                                inbox.message.award.div.appendChild(open_reward_button);
                                break;

                            default:
                                inbox.message.award.div.remove()
                                break;
                        }
                        setSave("messages", loadUser.inbox);                // Opslaan van de berichten
                    });
                    // --- AANMAKEN VAN DE CLOSE BUTTON -- // 
                    close_button = create_button;                           // Aanmaken van een button element
                    close_button.type = "button";                           // Type definieren
                    close_button.classList.add("cross");                    // "cross" toevoegen aan de class
                    close_button.innerHTML = `<i class='bx bx-x'></i>`;     // Invoegen van kruis icoontje

                    // --- VERWIJDEREN VAN EEN BERICHT --- //
                    close_button.addEventListener('click', (c) => {           // Eventlistener plaatsen op het kruis icoontje om het bericht te kunnen verwijderen
                        c.preventDefault;                                   // Verwijderen van standaard gedragingen van de button
                        loadUser.inbox.splice(user_message_id, 1);               // Wissen van het bericht in de Inbox array
                        createAlert("Het bericht is verwijderd!");          // Alert uitsturen
                        message_li.remove();                                // Bericht verwijderen in de html
                        setSave("inbox", loadUser.inbox);                // Opslaan van de berichten

                    });
                    message_li.appendChild(close_button);
                    inbox.div.appendChild(message_li);

                }

            }
        }

    }

}


export function getUnread(){
    amount = 0;
  if(loadUser.inbox.length !== 0 ){
    for(x in loadUser.inbox){
        if(loadUser.inbox[x].message_read === false){
            amount++
        }
    }
    return amount; 
  }
}