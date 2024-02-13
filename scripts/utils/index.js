import { Api } from "../api/api.js";
import { Photographer } from "../models/photographer.js";
import { PhotographerCard } from "../templates/photographerTemplate.js";

// html section to add photographer cards
const photographersSection = document.querySelector(".photographer_section");

// API constructor to read the json file 
const photographersApi = new Api("./data/photographers.json");

const displayPhotographers = async () => {
	const photographersData = await photographersApi.get(); // get both dicts
	const photographers = photographersData.photographers; // photographer dict

	// map function to make a Photographer model (class) for each entry
	// then to make PhotographerCard for each of them inside the loop
	photographers
		.map(photographer => new Photographer(photographer))
		.forEach(photographer => {
			const photographerTemplate = new PhotographerCard(photographer);
			const photographerCard = photographerTemplate.createCard();
			photographersSection.appendChild(photographerCard);
		});
};

displayPhotographers();