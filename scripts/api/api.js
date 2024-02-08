// API script which plays the role of connecting to data source (json/url)

export class Api {
    // takes the url (address) and read the json
	constructor(url) {
		this._url = url;
	}

	// fetch json data
	async get() {
		return fetch(this._url)
			.then((res) => res.json())  
			.catch((err) => console.log("An error occured in reading the data!", err));
	}	
}