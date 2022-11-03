/* ### ELEMENTS.js ###

    Hier staan alle elementen die je kan aanspreken.
        - HTML elementen
        - IDs
        - Classes
    Ook staan de create elementen erin 


    Volgende update; 
        - Alles in arrays en objecten steken
 */
// IMPORTS
import { selectElement } from "./functies"; // gebruik de functie selectElement("id/class/html","tag") om elementen vanuit de html file te selecteren. (kijk bij functies.js voor meer info)


// HTML Elementen
export const html = {
    // TITELS
    h2: selectElement("html", "h2"),
    h3: selectElement("html", "h3"),

    // FORMS
    input: selectElement("html", "input"),
    select: selectElement("html", "select")
}
// CREATE ELEMENTEN
export const create = {
    h2: document.createElement("h2"),
    p: document.createElement("p"),
    div: document.createElement("div"),
    ul: document.createElement("ul"),
    li: document.createElement("li"),
    button: document.createElement("button"),
}

// TEMPLATE
export const container_div = selectElement("id", "container");

// INDEX.html

// GUESTS.html
export const guest = {
    login_bttn: selectElement("id", "guest_login_bttn"),
    register_bttn: selectElement("id", "guest_register_bttn")
}
// REGISTER.html

export const register_div = selectElement("class", "register");
export const register_bttn = selectElement("id", "register_bttn");

// LOCATIONS.html
export const locations = {
    container: selectElement("id", "locations_div"),
    name_h3: selectElement("id", "location_name"),
    place: {
        name_h3: selectElement("id", "location_name"),
        list_ul: selectElement("id", "place_list"),
    }
}


// SHOPS in locations.html
export const shop_name_h3 = selectElement("id", "shop_name");
export const shops_div = selectElement("id", "shops");

// INBOX.html
export const inbox = {
    div: selectElement("id", "inbox"),
    list_ul: selectElement("id", "inbox_list"),
    message_div: selectElement("id", "inbox_message"),

    message: {
        sender_li: selectElement("id", "message_sender"),
        date_li: selectElement("id", "message_date"),
        subject_li: selectElement("id", "message_subject"),
        content_li: selectElement("id", "message_content"),

        award: {
            div: selectElement("id", "message_reward"),
            name_h5: selectElement("id", "message_reward_name"),
            content_p: selectElement("id", "message_reward_content"),
        }

    }

}

// INVENTORY.html
export const inventory_buttons_div = selectElement("id", "inventory_buttons");
export const inventory_type_li = selectElement("id", "inventory_type");
export const inventory_amount_items_li = selectElement("id", "inventory_amount_items");
export const inventory_max_items_li = selectElement("id", "inventory_max_items");

export const inventory_items_container_div = selectElement("class", "items_container");
export const inventory_preview_container_div = selectElement("class", "preview_container");

