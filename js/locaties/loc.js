import { page, sitetitle } from "../config/meta";
import { user, userKoffer, userStats } from "../config/save";
import { getData, setSave } from "../modules/funct";
import { locnaam, pagetitle, plLijst, plnaam, shopnaam, sluip, winkel } from "../modules/select";
import { getKoffertype } from "../user/koffer";


let locatie, plaats;

let dbloc, dbpl, dbsub, lcNaam, plNaam, sbNaam, db, dbitems;

let subli;

let shop_items, shop_list, shop_item;
let dis, btn_in;

shop_list = document.querySelector(".winkel_items");


locatie = user.locatie;
plaats = user.plaats;

export function getLocatie() {
  if (user.status === "online" && page === "/locaties.html") {
    return getData("locaties", locatie)
      .then(data => {
        // ophalen locatie naam
        dbloc = data.locatie;
        lcNaam = dbloc["lc-naam"];
        locnaam.innerHTML = lcNaam;

        for (let x = 0; x < dbloc.plaatsen.length; x++) {
          // plaats check + ophalen van de juiste locatie
          if (plaats == x) {
            dbpl = dbloc.plaatsen[x];
            plNaam = dbpl["pl-naam"]
            plnaam.innerHTML = plNaam;

            document.title = sitetitle + " | " + plNaam; // moet nog veranderd worden
            // opstellen van de subplaatsen lijst
            for (let y = 0; y < dbpl.sub.length; y++) {
              subli = document.createElement("li");
              dbsub = dbpl.sub[y];
              sbNaam = dbsub["sb-naam"];
              subli.innerHTML = sbNaam;
              // event listener voor het element
              subli.addEventListener("click", (e) => {
                let active = document.querySelector(".js_active");
                let winkel_active = document.querySelector(".winkel_active");
                let sluip = document.querySelector("#sluip"); // id van de sluip selecteren
                setSave("sluip", dbpl.sub[y]["sb-naam"]); // data in de sluip opslaan
                sluip.innerHTML = dbpl.sub[y]["sb-naam"]; // injecteren in de html

                e.target.classList.add("winkel_active");
                // als er al een winkel actief is 
                if (active !== null) {
                  active.innerHTML = ""
                  shop_list.classList.remove("js_active");
                  winkel_active.classList.remove("winkel_active");
                }

                if (locatie == "ww" || locatie == "hogm") {
                  // html injectie voor de shops
                  sbNaam = dbpl.sub[y]["sb-naam"];
                  db = dbpl.sub[y]["db"];
                  dbitems = dbpl.sub[y]["items"];
                  shopnaam.innerHTML = sbNaam;
                  shop_list.classList.add("js_active");
                  // CHECKEN OF DE KOFFER VOL ZIT 
                  if (userKoffer.voorwerpen.length == getKoffertype()) {
                    dis = "disabled";
                    btn_in = "Koffer vol"
                  }else{
                    btn_in = "Koop"
                  }

                  getData("items", db)
                    .then(items => {
                      shop_items = items.db.items;

                      for (let i = 0; i < shop_items.length; i++) {
                        for (let w = 0; w < dbitems.length; w++) {

                          if (dbitems[w] == i) {

                            shop_item = document.createElement("li");
                            shop_item.classList.add("winkel_item");
                            shop_item.innerHTML = `
                            <img src="./assets/items/${db}/${i}.svg" alt="">
                            <ul>
                                <li><h4>${shop_items[i]["naam"]}</h4></li>
                                <li class="kosten"><img src="./assets/img/galleon.svg" alt=""><span>${shop_items[i]["g"]}</span></li>
                                <li class="kosten"><img src="./assets/img/sickle.svg" alt=""><span>${shop_items[i]["s"]}</span></li>
                                <li class="kosten"><img src="./assets/img/knut.svg" alt=""><span>${shop_items[i]["k"]}</span></li>
                            </ul>
                            <div class="kopen">
                                <select name="" id="">
                                    <option value="1">1x</option>
                                    <option value="10">10x</option>
                                    <option value="20">20x</option>
                                    <option value="30">30x</option>
                                </select>
                                <button class="btn" ${dis}>${btn_in}</button>
                            </div>
                            <p>${shop_items[i]["omschrijving"]}</p>
                        
                            `;
                            shop_list.appendChild(shop_item)
                          }
                        }

                      }
                      winkel.appendChild(shop_list);

                    });



                }
                else if (locatie == "hog") {
                  // html injectie voor de scholen
                }



              })
              plLijst.appendChild(subli);
            }

            break;

          }

        }


      })
  }
}
