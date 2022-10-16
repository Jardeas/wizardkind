/* Bundle voor alles wat te maken heeft met de gebruiker.
 - signup.js
 - uilen.js
*/
import { page } from "../config/meta";
import { bttn_aanmaken } from "../modules/select";
import { createUser } from "./signup";

// SIGNUP -> AANMAKEN
switch (page) {
    case "./register.html":
        bttn_aanmaken.addEventListener("click", (e) => {
            e.preventDefault;
            createUser();
        })
        break;

    default:
        break;
}
