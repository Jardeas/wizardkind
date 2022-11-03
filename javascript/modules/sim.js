import { sim_module } from "../config/settings";
import { loadUser, setSave } from "./functies";

// Het laatste opgeslagen tijd van de "meters" uit db halen van de gebruiker
let time = {
    hp: loadUser.hp_time,
    hygiene: loadUser.hygiene_time,
    fatigue: loadUser.fatigue_time,
    social: loadUser.social_time,
    fun: loadUser.fun_time,
    knowledge: loadUser.knowledge_time
}
// Het laatste opgeslagen stats van de "meters" uit db halen van de gebruiker

let user = {
    hp: loadUser.hp,
    max_hp: loadUser.max_hp,
    hygiene: loadUser.hygiene,
    fatigue: loadUser.fatigue,
    social: loadUser.social,
    fun: loadUser.fun,
    knowledge: loadUser.knowledge
}

let x,                  // x = voor de forloop
    date;               // is voor de datum op te slaan


document.addEventListener('alpine:init', () => {
    Alpine.data('sim', () => {
        return {
            int: {                                  // int is voor de getallen te weergeven in de html
                hp: user.hp + `%`,
                max_hp: user.max_hp + `%`,
                hygiene: user.hygiene + `%`,
                fatigue: user.fatigue + `%`,
                social: user.social + `%`,
                fun: user.fun + `%`,
                knowledge: user.knowledge + `%`
            },
            width: {                            // is voor de width te weergeven in de html
                hp: `width: ${user.hp}%`,
                hygiene: `width: ${user.hygiene}%`,
                fatigue: `width: ${user.fatigue}%`,
                social: `width: ${user.social}%`,
                fun: `width: ${user.fun}%`,
                knowledge: `width: ${user.knowledge}%`,
            },
            init() {
                setInterval(() => {             // om de 1000 milliesecs wordt deze code uitgevoerd
                    date = new Date();          // nieuwe datum opslaan
                    for (x in user) {           // for loop
                        switch (true) {
                            case (user[x] !== 0 && date.getTime() > time[x]):           // als de bv hp != 0 & date in milliesecs > hp_tijd zal dit uitgevoerd worden
                                user[x]--;                                              // aftrekking van -1 bv hp - 1
                                time[x] = date.setMinutes(date.getMinutes() + sim_module.time[x]);       // de tijd opslaan + de aantal min. bv hp_tijd + 6 (kan je instellen in settings.js)
                                this.int[x] = user[x] + `%`;            // het nummer updaten in de html
                                this.width[x] = `width: ${user[x]}%`;   // de width updaten in de html

                                setSave(Object.keys(user)[x], user[x]);     // het opslaan van het nummer bv de hp
                                setSave(Object.keys(time)[x], time[x]);     // de tijd opslaan van het gegeven stat bv hp_tijd
                                break;

                            default:
                                break;
                        }
                    }


                }, 1000)

            }
        }
    })
})


