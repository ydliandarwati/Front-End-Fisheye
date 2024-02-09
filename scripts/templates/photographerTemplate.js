// class for photographer card (main page) 
export class PhotographerCard {
    constructor(photographer){
        this.photographer = photographer;
    }

    // create photographer card, we add the query string with id inside link
    createCard() {
        const article = document.createElement( 'article' );
        const content = `
            <a href="photographer.html?id=${this.photographer.id}" role="link" aria-label="Voir le profil de ${this.photographer.name}">
                <img class="photographer_thumbnail" src="./assets/photographers/${this.photographer.portrait}" alt="${this.photographer.name}">
                <h2 class="photographer_name">${this.photographer.name}</h2>
            </a>
            <p class="photographer_location">${this.photographer.city}, ${this.photographer.country}</p>
            <p class="photographer_tagline">${this.photographer.tagline}</p>
            <span class="photographer_price">${this.photographer.price}€/jour</span>
        `;
        article.innerHTML = content;
        return article;
    }
}


// class for photographer header
export class PhotographerHeader {
    constructor(photographer) {
        this.photographer = photographer;
    };

    createHeader() {
        const profileHeader = document.querySelector(".main_header");
        const formName = document.querySelector(".modal_form_name");
        formName.textContent = this.photographer.name;
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.content = `Découvrez ${this.photographer.name}, photographe professionnel basé à ${this.photographer.city}, ${this.photographer.country} offrant ses services à partir de ${this.photographer.price} € / jour.`;
        };
        const content = `
            <div class="photographer_profile__infos">
                <h1 class="photographer_name">${this.photographer.name}</h1>
                <p class="photographer_location">${this.photographer.city}, ${this.photographer.country}</p>
                <p class="photographer_tagline">${this.photographer.tagline}</p>    
            </div>
            <button class="btn contact_btn" type="button" aria-label="Open contact form">Contactez-moi</button>
            <img class="photographer_thumbnail" src="assets/photographers/${this.photographer.portrait}" alt="${this.photographer.name}">
        `;
        profileHeader.innerHTML = content;
        return profileHeader;
    };
};