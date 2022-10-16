/* Bundle voor alles wat te maken heeft met de gebruiker.
 - signup.js
 - uilen.js
*/
import { bttn_aanmaken } from "../modules/select";
import { createUser } from "./signup";

// SIGNUP -> AANMAKEN
bttn_aanmaken.addEventListener("click", (e) => {
    e.preventDefault;
    createUser();
})