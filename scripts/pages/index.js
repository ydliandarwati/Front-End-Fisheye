    import { photographerTemplate } from "../templates/photographer.js" 
    
    // requête sur le fichier JSON en utilisant "fetch"
    async function getPhotographers() {
        const response = await fetch("./data/photographers.json");
        const data = await response.json();
        // data has two dictionaries: photographers & media
        return { photographers: data.photographers }
    }

    // requête for putting data into html
    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        // loop over photographer list
        photographers.forEach((photographer) => {
            const photographerModel = photographerTemplate(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    }

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    }
    
    // initiate list of photographers
    init();
    
