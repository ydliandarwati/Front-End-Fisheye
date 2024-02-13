import { Api } from "../api/api.js";
import { MediaCard} from "../templates/mediaTemplate.js";
import { PhotographerHeader } from "../templates/photographerTemplate.js";
import { Photographer } from "../models/photographer.js";
import { MediasFactory } from "../factories/mediaFactories.js";
import { showLikes } from "../utils/likes.js";
import { openCloseFormContact, validateForm } from "../utils/contactForm.js";
import { openCloseFilterMenu, applyFilter } from "../utils/filter.js";
import { displayLightbox } from "../utils/lightbox.js";

// API constructor for json 
const photographersApi = new Api("./data/photographers.json");

// extract id from url
const photographerId = new URLSearchParams(window.location.search).get("id");

export const getPhotographerById = async () => {
	const { photographers, media } = await photographersApi.get(); // keep both dicts
	
	// use id to find the photographer the user clicked on 
	const selected_photographer = photographers.find(photographer => photographer.id == photographerId);
	// Photographer model for the corresponding id
	const photographer = new Photographer(selected_photographer);


	// list of all Media model for the corresponding photographer
	// also apply mediafactory to them and 
	const medias = media
		.map(media => new MediasFactory(media))
		.filter(media => media.photographerId == photographerId);
	return { photographer, medias };
};

const showProfile = async () => {
	// get relevant data of photographer and media
	const { photographer, medias } = await getPhotographerById(); 
	
	// create header
	const headerTemplate = new PhotographerHeader(photographer); 
	headerTemplate.createHeader(); 

	// create media cards
	const mediasTemplate = new MediaCard(photographer, medias);
	mediasTemplate.createCard();

	// compute and display total likes
	showLikes();

	// contact form open/close
	openCloseFormContact();

	// validating form
	validateForm();

	// filter menu open/close
	openCloseFilterMenu();

	// refresh media based on chosen filter
	applyFilter(mediasTemplate);

	// lightbox
	displayLightbox(mediasTemplate);
};

showProfile();