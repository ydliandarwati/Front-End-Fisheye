export class MediaCard {
	constructor(photographer, medias) {
		this.photographer = photographer;
		this.medias = medias;
	}

	createCard() {
		const mediasSection = document.querySelector(".main_media");
		let content = `
		<section class="gallery">
		${this.medias.map(media => {
		// define media content (image and video)
		const mediaContent = media.image
			? ` <img class="gallery_thumbnail" src="./assets/FishEye_Photos/${this.photographer.id}/${media.image}" alt="${media.alt}">`
			: ` <video class="gallery_thumbnail" aria-label="${media.alt}">
						<source src="./assets/FishEye_Photos/${this.photographer.id}/${media.video}" type="video/mp4">
					</video>`;
	
		// return value of map
		return `<article class="media_card">                           
						<a href="#" data-media=${media.id} role="link" aria-label="View media">
							<figure>${mediaContent}</figure>
						</a>
						<figcaption>
							<h2>${media.title}</h2>
								<div role="group" aria-label="Like button and number of likes">
									<span>${media.likes}</span> 
									<button class="like_btn" type="button" aria-label="Like" data-id="${media.id}">
										<span class="fas fa-heart" aria-hidden="true"></span>
									</button> 
								</div>
						</figcaption>
					</article>
				`;}).join("")} 
			</section>`;

		// add total likes to content
		content += `<aside>
			<p class="photographer_Likes">
				<span class="photographer_likes_count"></span>
				<span class="fas fa-heart" aria-hidden="true"></span>
			</p>
			<span>${this.photographer.price}€ / jour</span>
		</aside>`;

		mediasSection.innerHTML = content;
		return mediasSection;
	}
}