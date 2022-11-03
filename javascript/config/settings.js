// BASIC SETTINGS
export const site_title = "Wizardkind";         // Invoegen met een string ("site-titel")


// INBOX SETTINGS : 
export const inbox_module = true;               // Inbox module (true/false)
export const award_module = true;               // Awards in de inbox (true/false)    


// TIME SETTINGS
export const time_module = {
    auto_logout: true,                   // auto logout module (true/false)
    logout_time: 259200000,              // 3 dagen in Millieseconds (alleen millieseconden ingeven) UPDATE --> omzetten naar dagen

    conditions: true                     // de weer en seizoens condities (true/false)
};

export const sim_module = {
    active : true,                          // simulatie activatie = true/false
    time : {
        hp_time: 6,                         // aantal minuten wanneer hp-- gebeurt              -> dit moet een int zijn    = 6
        hygiene_time: 15,                   // aantal minuten wanneer hygiene-- gebeurt         -> dit moet een int zijn    = 15
        fatigue_time: 25,                   // aantal minuten wanneer fatigue-- gebeurt         -> dit moet een int zijn    = 25
        social_time: 30,                    // aantal minuten wanneer social-- gebeurt          -> dit moet een int zijn    = 30
        fun_time: 35,                       // aantal minuten wanneer fun-- gebeurt             -> dit moet een int zijn    = 35
        knowledge_time: 45,                 // aantal minuten wanneer knowledge-- gebeurt       -> dit moet een int zijn    = 45
    }

}