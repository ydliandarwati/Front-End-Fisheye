export class Photographer {

	constructor (data) {
	  this._profilPath = ''
	  this._id = data.id
	  this._name = data.name
	  this._city = data.city
	  this._country = data.country
	  this._tagline = data.tagline
	  this._price = data.price
	  this._portrait = data.portrait
	  this._portfolio = []
  
	  this._templatePhotographer = null
	  this._templatePortfolio = null
	  this._templateModal = null
	  this._templateFilter = null
	}
  
	// getters 
	get id () {
	  return this._id
	} 
  
	get name () {
	  return this._name
	}
  
	get city () {
	  return this._city
	}
  
	get country () {
	  return this._country
	}
  
	get tagline () {
	  return this._tagline
	}
  
	get price () {
	  return this._price
	}
  
	get portrait () {
	  return this._profilPath + this._portrait
	}
  
	get portfolio () {
	  return this._portfolio
	}
  
	get likes () {
	  return this._caluculateLikes()
	}
  
	get templatePhotographer () {
	  return this._templatePhotographer
	}
  
	get templatePortfolio () {
	  return this._templatePortfolio
	}
  
	get templateModal () {
	  return this._templateModal
	}
  
	get templateFilter () {
	  return this._templateFilter
	}
  
	// setters

	set portfolio (medias) {
	  this._portfolio = medias
	}
  
	set templatePhotographer (template) {
	  this._templatePhotographer = template
	}
  
	set templatePortfolio (template) {
	  this._templatePortfolio = template
	}
  
	set templateModal (template) {
	  this._templateModal = template
	}
  
	set templateFilter (template) {
	  this._templateFilter = template
	}

  }
  