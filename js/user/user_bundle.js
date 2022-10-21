/* Bundle voor alles wat te maken heeft met de gebruiker.
 - signup.js
 - uilen.js
*/
import { page } from "../config/meta";
import { getLocatie } from "../locaties/loc";
import { bttn_aanmaken, bttn_inloggen } from "../modules/select";
import { createUser, loginUser } from "./signup";
import { checkUilen } from "./uilen";

// SIGNUP -> AANMAKEN
switch (page) {
    case "/register.html":
        bttn_aanmaken.addEventListener("click", (e) => {
            e.preventDefault;
            createUser();
        })
        break;
    case "/gasten.html":
        bttn_inloggen.addEventListener("click", (e) => {
            e.preventDefault();
            loginUser();
        })
        break;
    case "/uilen.html":
        checkUilen();
        break;
    case "/locaties.html":
        getLocatie();
        break;

    default:
        break;
}
