import { Api } from "../api/api.js";
import { PhotographerTemplate } from "../templates/photographerTemplate.js";
import { Photographer } from "../models/photographer.js";


async function init() {
    // Récupère les datas des photographes
    const data = new Api("./data/photographers.json")
    const photographers = await data.getPhotographers();

    // loop over photographer list and requête for putting data into html
    const photographersSection = document.querySelector(".photographer_section");
    photographers.forEach((entry) => {
         //create card and add to html
        const photographer = new Photographer(entry);
        const photographerTemplate = new PhotographerTemplate(photographer);
        photographersSection.appendChild(photographerTemplate.createPhotographerCard());
    });
}
    
// show list of all photographers cards
init();
    
