import { Api } from "../api/api.js";
import { PhotographerTemplate } from "../templates/photographerTemplate.js";
import { Photographer } from "../models/photographer.js";
import { MediaTemplate } from "../templates/mediaTemplate.js";
import { Video, Picture } from '../models/media.js'

const data = await new Api("./data/photographers.json")

async function init () {      
	const photographersSection = document.querySelector(".photograph-header");
    const mediaSection = document.querySelector(".media_section");

    const listMedia = [];

    const searchParams = new URLSearchParams(window.location.search);
    const photographer_id = searchParams.get('id');  

    // find photogapher and its media, based on id in query string
    const photographerData = await data.getPhotographerById(photographer_id);
    const mediaData = await data.getMeidasById(photographer_id);

    const photographer = new Photographer(photographerData);
    const photographerTemplate = new PhotographerTemplate(photographer);
    photographersSection.appendChild(photographerTemplate.createPhotographerShortCard());


	// add video/photo to the list
	mediaData.forEach((entry) => {
        if (entry.image) {
        	listMedia.push(new Picture(entry))
        } else if (entry.video) {
        	listMedia.push(new Video(entry))
        }
    });	
	
    photographer.portfolio = listMedia;

	photographer.portfolio.forEach(media => {
        const mediaTemplate = new MediaTemplate(photographer, media)
        mediaSection.appendChild(mediaTemplate.createMediaCard())
	})

	const likeBtns = document.querySelectorAll('input[type=checkbox]');
	likeBtns.forEach(btn => btn.addEventListener("click", (e) => update_likes(e)));

}


function update_likes(e) {
	const likedMedia = data.getMeidasByMediaId(e.target.id)
    console.log(likedMedia)
	const getLikes = async () => {
		const a = await likedMedia;
		console.log(a[0].likes);
	}	

	getLikes();

	// Promise
    // .then(({ data }) => data)
    // .then(data => doSomethingWithData(data))// rest of script
	// const likeBtns = document.querySelectorAll('input[type=checkbox]');
	// const likedMedia = data.getMeidasByMediaId(likeBtns[0].id)
	// console.log(likedMedia)
	// likeBtns.forEach((btn) => btn.addEventListener("click", (e) => {
	// 	if (e.target.checked) {
	// 		var mediaLikes = data.getMeidasByMediaId(btn.id);
	// 		console.log(mediaLikes)
	// 	} else {
	// 	  console.log("ppp")
	// 	}
	// }));
	// 	this.$wrapperCard.querySelector('label.favorite__counter').innerHTML = this._media.likes
	// 	this.$wrapperCard.querySelector('input.favorite__input').setAttribute('aria-label', `${this._media.likes} j'aime`)
  
	// 	// Rafraichie le le ContentPhotographerLink
	// 	this._photographer.templatePhotographer.refreshPhotographerContentLink()
	//   })
	// console.log(bntLike)
	};

init();
// await ();

