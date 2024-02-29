import { showLikes } from "../utils/likes.js";
import { showLightbox } from "../utils/lightbox.js";

// to show/close drop-down filter menu
export const showFilter = () => {
	const filterMenu = document.querySelector(".dropdown_content");
	const filterMenuButton = document.querySelector(".drop_btn");
	const filterButtons = document.querySelectorAll(".dropdown_content button");

	filterMenuButton.addEventListener("click", () => {
		const isExpanded = filterMenuButton.getAttribute("aria-expanded") === "true" || false;
		filterMenuButton.setAttribute("aria-expanded", !isExpanded);
		filterMenu.classList.toggle("dropMenu_effect");
		document.querySelector(".fa-chevron-up").classList.toggle("rotate");

		const ariaValue = filterMenu.classList.contains("dropMenu_effect") ? "false" : "true";
		filterMenu.setAttribute("aria-hidden", ariaValue);

		const newTabIndexValue = filterMenu.classList.contains("dropMenu_effect") ? "0" : "-1";
		filterButtons.forEach(button => button.setAttribute("tabindex", newTabIndexValue));
	});
};


// apply filter to media cards
export const applyFilter = (mediasTemplate) => {
	const currentFilter = document.querySelector("#current_filter");
	const allFilters = Array.from(document.querySelectorAll(".dropdown_content li button"));

	let filterAlreadySelected = allFilters.find(filter => filter.textContent == currentFilter.textContent);
	filterAlreadySelected.style.display = "none";

	// eventlistener for each filter button, after click, currentFilter is changed to new filter
	// then apply filter
	allFilters.forEach(filter => {
		filter.addEventListener("click", () => {

			currentFilter.textContent = filter.textContent;
			if (filterAlreadySelected) filterAlreadySelected.style.display = "block";

			filterAlreadySelected = filter;
			filterAlreadySelected.style.display = "none";

			sortByFilter(filter.textContent);
		});
	});

	const sortByFilter = filterValue => {
		switch (filterValue) {
		case "Titre":
			mediasTemplate.medias.sort((a, b) => a.title.localeCompare(b.title));
			break;
		case "Popularité":
			mediasTemplate.medias.sort((a, b) => b.likes - a.likes);
			break;
		case "Date":
			mediasTemplate.medias.sort((a, b) => new Date(b.date) - new Date(a.date));
			break;
		}
		
		// now mediasTemplate is updated (because of filter)
		// so, create card for them, show lightbox and likes
		mediasTemplate.createCard();
		showLightbox(mediasTemplate);
		showLikes();
 
		const mediaElements = document.querySelectorAll(".media_card");
		mediaElements.forEach((media, index) => {
			setTimeout(() => {
				media.classList.add("animationCard");
			}, 100 * index);
		});   
	};
};