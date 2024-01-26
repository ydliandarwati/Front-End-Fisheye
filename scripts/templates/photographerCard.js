export class photographerCard {

    constructor(photographer) {
		this._photographer = photographer;
	}

    createPhotographerCard() {
        // brief way to do data.name, data.city, ....
        const { id, name, portrait, city, country, tagline, price } = this._photographer;

        const picture = `assets/photographers/${portrait}`;
        // create article and its elements (img, name, country, ...)

        // create anchor element for photographer link with img
        const a = document.createElement('a'); 
        // set query string
        a.href = "photographer.html?id=" + id; 

        const img = document.createElement('img');
        img.setAttribute("src", picture);
        a.appendChild(img); 

        const h2 = document.createElement('h2');
        h2.textContent = name;

        const location = document.createElement('h3');
        location.textContent = city + ', ' + country;

        const tag = document.createElement('h3');
        tag.textContent = tagline;

        const priceElement = document.createElement('p');
        priceElement.innerText = price + '€/jour';   

        const article = document.createElement( 'article' );
        article.appendChild(a);
        article.appendChild(h2);
        article.appendChild(location);
        article.appendChild(tag);
        article.appendChild(priceElement);
        return (article);
    }
}