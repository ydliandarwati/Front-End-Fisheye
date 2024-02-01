export class PhotographerTemplate {

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
        location.classList.add('photographer_location')
        location.textContent = city + ', ' + country;

        const tag = document.createElement('h3');
        tag.classList.add('photographer_tagline')
        tag.textContent = tagline;

        const priceElement = document.createElement('p');
        priceElement.classList.add('photographer_price')
        priceElement.innerText = price + '€/jour';   

        const article = document.createElement('article');
        article.classList.add('photographer_card');
        article.appendChild(a);
        article.appendChild(h2);
        article.appendChild(location);
        article.appendChild(tag);
        article.appendChild(priceElement);
        return (article);
    }

    createPhotographerShortCard() {
        // brief way to do data.name, data.city, ....
        const { name, city, country, tagline} = this._photographer;

        const nameElement = document.createElement('h2');
        nameElement.classList.add('photographer_name1')

        nameElement.textContent = name;

        const location = document.createElement('h3');
        location.classList.add('photographer_location1')
        location.textContent = city + ', ' + country;

        const tag = document.createElement('h3');
        tag.classList.add('photographer_tagline1')
        tag.textContent = tagline;

        const article = document.createElement('article');
        article.classList.add('photographer_card1');
        article.appendChild(nameElement);
        article.appendChild(location);
        article.appendChild(tag);
        return (article);
    }
}