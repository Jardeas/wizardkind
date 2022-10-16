import { userStats, userTijd } from "../config/save";
import { reLoad, setSave } from "./funct";

let thisDate = new Date();
let hongertijd = userTijd.hongertijd;
let hygienetijd = userTijd.hygienetijd;
let slaaptijd = userTijd.slaaptijd;
let sociaaltijd = userTijd.sociaaltijd;
let funtijd = userTijd.funtijd;

let hp = userStats.hp;
let maxhp = userStats.maxhp;
let hygiene = userStats.hygiene;
let slaap = userStats.slaap;
let sociaal = userStats.sociaal;
let fun = userStats.fun;

document.addEventListener('alpine:init', () => {
    Alpine.data('meters', () => {
        return {
            hp: `width: ${hp}%`,
            hptext: `${hp}%`,
            hygiene: `width: ${hygiene}%`,
            hygienetext: `${hygiene}%`,
            slaap: `width: ${slaap}%`,
            slaaptext: `${slaap}%`,
            sociaal: `width: ${sociaal}%`,
            sociaaltext: `${sociaal}%`,
            fun: `width: ${fun}%`,
            funtext: `${fun}%`,

            init() {
                setInterval(() => {
                    thisDate = new Date();
                    // HP SWITCH
                    switch (true) {
                        case (hp != 0 && thisDate.getTime() > hongertijd):
                            hp--;
                            hongertijd = thisDate.setMinutes(thisDate.getMinutes() + 5); // na 5 min - 1hp
                            setSave("hongertijd", hongertijd);
                            setSave("hp", hp);
                            // update meter en tekst
                            this.hp = `width: ${hp}%`;
                            this.hptext = `${hp}%`;
                            console.log("-hp");
                            break;
                        case (hp <= 0):
                            reLoad("replace", "404");
                            // je vliegt naar de ziekenzaal + wachtijd van ...
                            break;


                        default:
                            break;
                    };
                    // HYGIENE SWITCH
                    switch (true) {
                        case (hygiene != 0 && thisDate.getTime() > hygienetijd):
                            hygiene--;
                            hygienetijd = thisDate.setMinutes(thisDate.getMinutes() + 15); // na 15 min - 1 hygiene
                            setSave("hygienetijd", hygienetijd);
                            setSave("hygiene", hygiene);
                            // update meter en tekst
                            this.hygiene = `width: ${hygiene}%`;
                            this.hygienetext = `${hygiene}%`;
                            console.log("-hygiene");
                            break;
                        case (hygiene <= 45):
                            // NPCS ga niet meer willen praten met jouw en de toegang wordt geweigerd in de winkels.
                            break;
                        case (hygiene <= 0):
                        // Sturen naar de doucheruimte + een wachtijd van...
                        default:
                            break;
                    };
                    // SLAAP SWITCH
                    switch (true) {
                        case (slaap != 0 && thisDate.getTime() > slaaptijd):
                            slaap--;
                            slaaptijd = thisDate.setMinutes(thisDate.getMinutes() + 25); // na 25 min - 1 slaap
                            setSave("slaaptijd", slaaptijd);
                            setSave("slaap", slaap);
                            // update meter en tekst
                            this.slaap = `width: ${slaap}%`;
                            this.slaaptext = `${slaap}%`;
                            console.log("-slaap");
                            break;
                        case (slaap <= 35):
                            // Je scherm wordt soms zwart voor een periode.
                            break;
                        case (slaap <= 0):
                        // Sturen naar de slaapkamer + wachtijd van...
                        default:
                            break;
                    };
                    // SOCIAAL SWITCH
                    switch (true) {
                        case (sociaal != 0 && thisDate.getTime() > sociaaltijd):
                            sociaal--;
                            sociaaltijd = thisDate.setMinutes(thisDate.getMinutes() + 45); // na 45 min - 1 sociaal
                            setSave("sociaaltijd", sociaaltijd);
                            setSave("sociaal", sociaal);
                            // update meter en tekst
                            this.sociaal = `width: ${sociaal}%`;
                            this.sociaaltext = `${sociaal}%`;
                            console.log("-sociaal");
                            break;
                        case (sociaal <= 35):
                            // NPCS tonen geen opdrachten meer, je kan ook geen lessen meer volgen
                            break;
                        case (sociaal <= 0):
                        // Sturen naar de ziekenzaal wegens depressie + wachtijd van...
                        default:
                            break;
                    };
                    // FUN SWITCH
                    switch (true) {
                        case (fun != 0 && thisDate.getTime() > funtijd):
                            fun--;
                            funtijd = thisDate.setMinutes(thisDate.getMinutes() + 35); // na 35 min - 1 fun
                            setSave("funtijd", funtijd);
                            setSave("fun", fun);
                            // update meter en tekst
                            this.fun = `width: ${fun}%`;
                            this.funtext = `${fun}%`;
                            console.log("-fun");
                            break;
                        case (fun <= 50):
                            // Je kan geen lessen meer volgen + geen winkels bezoeken
                            break;
                        case (fun <= 0):
                        // Alle links worden geblokkeerd voor een tijd (behalve de leuke) voor een wachtijd van:
                        default:
                            break;
                    };

                }, 1000)

            }
        }

    })
});

