import { photographerCard } from "../templates/photographerCard.js" 
import { mediaCard } from "../templates/mediaCard.js" 
import { PhotographersApi, MediasApi } from "../api/api.js";

const searchParams = new URLSearchParams(window.location.search);
const photographer_id = searchParams.get('id'); 


async function displayPhotographerById (id) {       
        const PhotographersApiClass = new PhotographersApi("./data/photographers.json")
        const photographers = await PhotographersApiClass.getPhotographers();

        // find photogapher based on id in query string
        const photographer = photographers.filter(entry => entry.id == id)[0];
        
        const photographersSection = document.querySelector(".photograph-header");
        const cardClass = new photographerCard(photographer);

        //make card photographer
        const photographer_card = cardClass.createPhotographerCard();
        photographersSection.appendChild(photographer_card); //appendchild add to html
}
89

async function displayMedia (id) {

    //to grab the section that we want to use
    const photographersSection = document.querySelector(".media_section");

    const MediaApiClass = new MediasApi("./data/photographers.json")
    const media = await MediaApiClass.getMedias();

    const mediaById = media.filter(entry => entry.photographerId == id);

    mediaById.forEach((entry) => {
        const cardClass = new mediaCard(entry);
        const media_card = cardClass.createMediaCard();
        photographersSection.appendChild(media_card); 

    });
}


displayPhotographerById(photographer_id);
displayMedia(photographer_id)

