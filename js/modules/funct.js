
// data halen uit de json database
export async function getData(mf,p) {
    // mf = mapfile
    // p = pathfile
    // data staat in de js files
    const response = await fetch(`../js/data/${mf}/${p}.json`)
    const data = await response.json();
    return data
}

// opslaan van de gebruiker
export function setSave(id,value){
    localStorage.setItem(id, value)
}

//reloaden van de pagina
export function reLoad(id,value){
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
