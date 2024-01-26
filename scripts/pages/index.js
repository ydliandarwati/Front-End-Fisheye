    import { photographerCard } from "../templates/photographerCard.js" 
    import { PhotographersApi } from "../api/api.js";


    async function showPhotographersCards() {
        // Récupère les datas des photographes
        const PhotographersApiClass = new PhotographersApi("./data/photographers.json")
        const photographers = await PhotographersApiClass.getPhotographers();

        const photographersSection = document.querySelector(".photographer_section");
        // loop over photographer list and requête for putting data into html
        photographers.forEach((entry) => {
            const cardClass = new photographerCard(entry);
            const photographer_card = cardClass.createPhotographerCard();
            photographersSection.appendChild(photographer_card); //appendchild add to html
        });
    }
    
    // show list of all photographers cards
    showPhotographersCards();
    
