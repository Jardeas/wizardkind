import { sitetitle } from "../config/meta";
import { user, userStats, userUilen } from "../config/save";
import { acces } from "./access";
import { autoLogout, checkDag } from "./tijd";



let footerText, pageTitle;
let lnav ,rnav;
let d = new Date();
let uil = JSON.parse(userUilen.uilen);

pageTitle = document.querySelector(".page-title").innerHTML;


footerText = `&copy ${sitetitle}`;

document.title = sitetitle + " | " + pageTitle;

acces();

// HTML VOOR DE LINKSE NAVIGATIE
lnav = `

<ul>
    <li x-text="username">Username</li>
    <li><a href="./index.html">Voorpagina</a></li>
    <li><a href="./profiel.html">Profiel</a></li>
    <li class="link_item">
        <a href="./uilen.html">Uilen</a>
        <span class="badge" x-text="uilen">1</span>
    </li>
    <li><a href="./talenten.html">Talenten</a></li>
    <li><a href="#">Instellingen</a></li>
</ul>

<ul>
    <li>Menu</li>
    <li><a href="./locaties.html">De Wegisweg</a></li>
    <li><a href="./dagboeken.html">Dagboeken</a></li>
    <li><a href="./opdrachten.html">Opdrachten</a></li>
    <li><a href="./koffer.html">Koffer</a></li>
    <li><a href="#">Kledingskast</a></li>
    <li><a href="#">De Ochtendprofeet</a></li>
    <li><a href="./reizen.html">Reizen</a></li>
    
</ul>

<ul>
    <li>Extra</li>
    <li><a href="#">Toverschaak</a></li>
    <li><a href="#">De Loterij</a></li>
    <li><a href="#">Bounty-muur</a></li>
    <li><a href="#">Foppe's vragen</a></li>
</ul>

<ul>
    <li>Wizardkind</li>
    <li><a href="#">Informatie</a></li>
    <li><a href="#">Encyclopedie</a></li>
    <li><a href="#">Disclaimer</a></li>
    <li><a href="#">Privacy Policy</a></li>
</ul>

`,


// HTML VOOR DE RECHTSE NAVIGATIE
rnav = `

<div class="groep_info">
    <img src="./assets/img/zweinstein.png" alt="">
</div>

<div class="gebruikers_info">
    <span x-text="username"></span>
</div>

<div class="locatie_info"  >
    <div class="locatie" x-data="sluip">
        <i class='bx bx-current-location'></i>
        <a href="./sluip.html" x-text="sluip" id="sluip">Wegisweg (noord)</a>
    </div>
    <div class="tijd" x-data="interval">
        <i class='bx bx-time-five'></i>
        <span x-text="tijd">22:00</span>
    </div>
    <div class="weer">
        <i class='bx bx-cloud-light-rain'></i>
    </div>
</div>
<div class="geld">
    <div class="galjoenen">
        <img src="./assets/img/galleon.svg" alt=""><span x-text="galjoen">1000</span>
    </div>
    <div class="sikkels">
        <img src="./assets/img/sickle.svg" alt=""><span x-text="sikkel">1500</span>
    </div>
    <div class="knoeten">
        <img src="./assets/img/knut.svg" alt=""><span x-text="knoet">2000</span>
    </div>
</div>
<div class="progress" x-data="meters">
    <div class="progress_bg" style="width: 100%;">
        <div class="progress_bar" :style="hp">
            <i class='bx bxs-baguette'></i>
            <span x-text="hptext">100%</span>
        </div>
    </div>
    <div class="progress_bg" style="width: 100%;">
        <div class="progress_bar" :style="hygiene">
            <i class='bx bxs-shower'></i>
            <span x-text="hygienetext">25%</span>
        </div>
    </div>
    <div class="progress_bg" style="width: 100%;">
        <div class="progress_bar" :style="slaap">
            <i class='bx bxs-bed'></i>
            <span x-text="slaaptext">55%</span>
        </div>
    </div>
    <div class="progress_bg" style="width: 100%;">
        <div class="progress_bar" :style="sociaal">
            <i class='bx bxs-heart'></i>
            <span x-text="sociaaltext">85%</span>
        </div>
    </div>
    <div class="progress_bg" style="width: 100%;">
        <div class="progress_bar" :style="fun">
            <i class='bx bxs-game'></i>
            <span x-text="funtext">66%</span>
        </div>
    </div>
</div>



`;




// GENERATE BASE LAYOUT
document.addEventListener('alpine:init', () => {
    Alpine.data('temp', () => {
        return {
            header: `<p class='site-title'>${sitetitle}</p>`,
            footer: `<p class='footer-text'>${footerText}</p>`,
            leftnav: `${lnav}`,
            rightnav: `${rnav}`,
            username: `${user.voornaam} ${user.achternaam}` ,
            plaats: `${user.plaats}`,
            galjoen : `${userStats.galjoenen}`,
            sikkel : `${userStats.sikkels}`,
            knoet : `${userStats.knoeten}`,
            uilen : `${uil.length}`,
           
        }
        


    });
    Alpine.data('interval',()=>{
        return{
            tijd: `${d.toLocaleTimeString('nl-NL')}`,
            init(){
              setInterval(() => {
                d = new Date();
                this.tijd = `${d.toLocaleTimeString('nl-NL')}`;
                checkDag();
                autoLogout();
                // checkTijd();
              }, 1000);
              
            }
        }

    });
    Alpine.data('sluip',()=>{
        return{
            sluip: `${userStats.sluip}`,
        
        }

    });

});
