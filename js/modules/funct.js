// data halen uit de json database
export async function getData(mf, p) {
    // mf = mapfile
    // p = pathfile
    // data staat in de js files
    const response = await fetch(`../js/data/${mf}/${p}.json`)
    const data = await response.json();
    return data
}

// opslaan van de gebruiker
export function setSave(id, value) {
    localStorage.setItem(id, value)
}

//reloaden van de pagina
export function reLoad(id, value) {
    // id = "reload", "replace"
    // value = voor bv "index.html" wordt alleen gebruikt met de replace id
    setTimeout(function () {
        switch (id) {
            case "reload":
                location.reload();
                break;

            case "replace":
                location.replace(`${value}.html`)
                break;
            default:
                break;
        }
    }, 1500);

}
// ALERT FUNCTIE
export function createAlert(tekst) {
    let alert, bttn;
    let container = document.querySelector("#container");

    alert = document.createElement("div");
    bttn = document.createElement("button");
    alert.classList.add("alert")
    alert.innerHTML = `
    
        <p>${tekst}</p>
        <button type="button" class="cross"></button>
   `;
    bttn.classList.add("cross");
    bttn.type="button";
    bttn.innerHTML = "<i class='bx bx-x'></i>";

    bttn.addEventListener("click",(e)=>{
        e.preventDefault;
        alert.remove()
    })
    alert.appendChild(bttn);
    container.appendChild(alert);


}