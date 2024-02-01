class Media {
	constructor (data, photographer) {
	  this._id = data.id
	  this._photographer = photographer
	  this._date = new Date(data.date)
	  this._likes = data.likes
	  this._price = data.price
	  this._title = data.title
	  this._userLike = false
	  this._description = data.alt
	  this._template = null
	}
  
	// getters
	get id () {
	  return this._id
	}
  
	get date () {
	  return this._date
	}
  
	get likes () {
	  return this._likes
	}
  
	get userLike () {
	  return this._userLike
	}
  
	get price () {
	  return this._price
	}
  
	get description () {
	  return this._description
	}
  
	get title () {
	  return this._title
	}
  
	get photographer () {
	  return this._photographer
	}
  
	get template () {
	  return this._template
	}
  
	// setters

	set template (template) {
	  this._template = template
	}

	set likes (value) {
	  this._likes = value
	  this._userLike = !this._userLike
	}
  }
  
  export class Picture extends Media {
	constructor (data) {
	  super(data)
	  this._type = 'picture'
	  this._image = data.image
	  this._imageThumbPath = `assets/photos/${data.photographerId}/medium/${this._image}`
	  this._imagePath = `assets/photos/${data.photographerId}/${this._image}`
	}
  
	// getters
	get thumbPath () {
	  return this._imageThumbPath
	}
  
	get path () {
	  return this._imagePath
	}
  
	get image () {
	  return this._image
	}
  
	get type () {
	  return this._type
	}
  }
  

  export class Video extends Media {

	constructor (data) {
	  super(data)
	  this._type = 'video'
	  this._video = data.video
	  this._videoThumbPath = `assets/photos/${data.photographerId}/${this._video.split('.').slice(0, -1).join('.')}.jpg`
	  this._videoPath = `assets/photos/${data.photographerId}/${this._video}`
	}
  
	// getters
	get thumbPath () {
	  return this._videoThumbPath
	}
  
	get path () {
	  return this._videoPath
	}
  
	get video () {
	  return this._video
	}
  
	get type () {
	  return this._type
	}
  }
  