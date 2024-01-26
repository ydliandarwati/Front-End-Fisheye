export class mediaCard {

    constructor(media) {
		this._media = media;
	}

    createMediaCard() {
        // brief way to do data.name, data.city, ....
        const { id, photographerId, title, likes, data, price } = this._media;


        let media_src = './assets/FishEye_Photos/' + photographerId+"/";
        if (this._media.image) {
            media_src += this._media.image;
        }
        else if (this._media.video) {
            media_src += this._media.video;
        }

        // create anchor element for photographer link with img
        const a = document.createElement('a'); 
        // set query string
        a.href = "photographer.html?id=" + id; 

        const img = document.createElement('img');
        img.setAttribute("src", media_src);
        a.appendChild(img); 

        const h2 = document.createElement('h2');
        h2.textContent = title;

        const priceElement = document.createElement('p');
        priceElement.innerText = price;   

        const article = document.createElement( 'article' );
        article.appendChild(a);
        article.appendChild(h2);
        article.appendChild(priceElement);
        return (article);
    }
}