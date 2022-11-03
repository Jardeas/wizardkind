import { sitetitle } from "../../js/config/meta";
import { getUnread } from "../user/inbox";
import { loadUser } from "./functies";

let left_nav =
    `<ul>
        <li x-text="username">Username</li>
        <li><a href="./index.html">Voorpagina</a></li>
        <li><a href="./profiel.html">Profiel</a></li>
        <li class="link_item">
            <a href="./uilen.html">Uilen</a>
            <span class="badge" x-text="messages">1</span>
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
    </ul>`;

let right_nav =
    `<div class="groep_info">
        <img src="./assets/img/zweinstein.png" alt="">
    </div>

    <div class="gebruikers_info">
        <span x-text="username"></span>
    </div>

    <div class="locatie_info">
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
            <img src="./assets/img/galleon.svg" alt=""><span x-text="gold">1000</span>
        </div>
        <div class="sikkels">
            <img src="./assets/img/sickle.svg" alt=""><span x-text="silver">1500</span>
        </div>
        <div class="knoeten">
            <img src="./assets/img/knut.svg" alt=""><span x-text="brons">2000</span>
        </div>
    </div>
    <div class="progress" x-data="sim">
        <div class="progress_bg" style="width: 100%;">
            <div class="progress_bar" :style="width.hp">
                <i class='bx bxs-baguette'></i>
                <span x-text="int.hp">100%</span>
            </div>
        </div>
        <div class="progress_bg" style="width: 100%;">
            <div class="progress_bar" :style="width.hygiene">
                <i class='bx bxs-shower'></i>
                <span x-text="int.hygiene">25%</span>
            </div>
        </div>
        <div class="progress_bg" style="width: 100%;">
            <div class="progress_bar" :style="width.fatigue">
                <i class='bx bxs-bed'></i>
                <span x-text="int.fatigue">55%</span>
            </div>
        </div>
        <div class="progress_bg" style="width: 100%;">
            <div class="progress_bar" :style="width.social">
                <i class='bx bxs-heart'></i>
                <span x-text="int.social">85%</span>
            </div>
        </div>
        <div class="progress_bg" style="width: 100%;">
            <div class="progress_bar" :style="width.fun">
                <i class='bx bxs-game'></i>
                <span x-text="int.fun">66%</span>
            </div>
        </div>
        <div class="progress_bg" style="width: 100%;">
        <div class="progress_bar" :style="width.knowledge">
            <i class='bx bxs-book-open'></i>
            <span x-text="int.knowledge">66%</span>
        </div>
    </div>
    </div> `;

// GENERATE BASE LAYOUT
document.addEventListener('alpine:init', () => {
    Alpine.data('data', () => {
        return {
            // TEMPLATE
            header: `<p class='site-title'>${sitetitle}</p>`,
            footer: `<p class='footer-text'>&copy; ${sitetitle}</p>`,
            left_nav: left_nav,
            right_nav: right_nav,

            username : loadUser.name + loadUser.last_name,
            gold : loadUser.gold,
            silver : loadUser.silver,
            brons : loadUser.brons,
            tag : loadUser.tag,
            messages : getUnread()
        }



    });
})
