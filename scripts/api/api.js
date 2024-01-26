// API script with two extended classes to read two dictionaries (photographer and media)
// We also have one parent class of API

class Api {
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
}

// class to handle photographer dictionary
export class PhotographersApi extends Api {
	constructor(url) {
		super(url);
	}
	// method to get photographers data
	async getPhotographers() {
		return await this.get("res.photographers");
	}
}

// class to handle media dictionary
export class MediasApi extends Api {
	constructor(url) {
		super(url);
	}
	// method to get medias
	async getMedias() {
		return await this.get("res.media");
	}
}