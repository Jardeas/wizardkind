import { site_title } from "../../config/settings";
import { loadUser } from "../../modules/functies";


export const no_message = "Je hebt momenteel geen brieven";
export const messages = [
    {
        subject: `Welkom op ${site_title}`,
        sender: `Vic Anuman`,                   // Moet nog veranderd worden naar paspoort ID.
        content: `Dag ${loadUser.name} <br>
        Blij dat wij u hier mogen ontvangen op onze fantastiche website.<br>
        Ik ben Vic Anuman één van de Minisers van Wizardkind, allereerst wil ik u mededelen dat wij bereid zijn om u ten alle tijde te helpen. We zijn namelijk veel online op onze server ;-)<br><br>
        Tevens krijgt u van mij een welkomstcadeautje om u toch al wat verder te helpen op deze magische reis. 
        `,
        awards: 0,
    },

    {
        subject: `Welkom op school`,
        sender: `Warry`,                   // Moet nog veranderd worden naar paspoort ID.
        content: `<strong>Schoolhoofd:</strong> Warry<br><br>
        Het doet me genoegen u te kunnen mededelen dat u in aanmerking komt voor een plaats aan Zweinsteins Hogeschool voor hekserij en Hocus-Pocus.<br> 
        Bijgaand treft u een lijst van schoolboeken en andere benodgidheden.<br>
        Het schooljaar begint op 1 maart.<br> 
        Gelieve voor 29 februari per uil te reageren.<br><br>
        Hoogachtend Warry<br><br> 

        <h3>Zweinstein Hogeschool benodigdheden</h3><br><br> 
        <h4>Uniform</h4> 
        Eerstejaars studenten hebben nodig;<br><br> 
        <ol>
        <li>Drie effen werkgewaden (zwart)</li>
        <li>Een effen puntmuts (zwart) voor schooltijd</li>
        <li>Een paar beschermende handschoenen (drakenhuid of soortgelijk)</li>
        <li>Een wintermantel (zwart, met zilveren speld)</li>
        </ol>
        NB: Alle kledingstukken moeten van naamlabels zijn voorzien.
        `
    }
];

