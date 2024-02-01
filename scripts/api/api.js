// API script which plays the role of connecting to data source (json/url)
// also with search by id functionalities

export class Api {
    // takes the url (address) and read the json
	constructor(url) {
		this._url = url;
	}

	// requête sur le fichier JSON en utilisant "fetch"
	async get(data) {
		return fetch(this._url)
			.then((res) => res.json())  
			.then((res) => eval(data))
			.catch((err) => console.log("An error occured in reading the data!", err));
	}

	// method to get photographers data
	async getPhotographers() {
		return fetch(this._url)
		.then((res) => res.json())  
		.then((res) => res.photographers)
		.catch((err) => console.log("An error occured in reading the data!", err));
	}

	// method to get medias
	async getMedias() {
		return fetch(this._url)
		.then((res) => res.json())  
		.then((res) => res.media)
		.catch((err) => console.log("An error occured in reading the data!", err));
	}

	// method to get requested photographer (by id)
	async getPhotographerById (id) {
		return fetch(this._url)
		.then(res => res.json())
		.then(res => res.photographers.filter(entry => entry.id == id)[0])
		.catch((err) => console.log("An error occured in reading the data!", err));

	  }
	
	  // method to get requested media (by id)
	  async getMeidasById (id) {
		return fetch(this._url)
		  .then(res => res.json())
		  .then(res => res.media.filter(entry => entry.photographerId == id))
		  .catch((err) => console.log("An error occured in reading the data!", err));
	  }

	  async getMeidasByMediaId (id) {
		return fetch(this._url)
		  .then(res => res.json())
		  .then(res => res.media.filter(entry => entry.id == id))
		  .catch((err) => console.log("An error occured in reading the data!", err));
	  }
}