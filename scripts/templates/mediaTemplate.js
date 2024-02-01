export class MediaTemplate {
	constructor (photographer, media) {
	    this._photographer = photographer
	    this._media = media
	}

  
    createMediaCard() {
        const img = document.createElement('img');
        img.setAttribute("src", this._media.path);
		img.classList.add('media_thumbnail')

		const card_title = document.createElement('div');
		const content = `<div class="card_title">
		<h2 class="media_title"> ${this._media.title}<h2>
		<div class="media_likes">
		<p class="media_likes_counter"> ${this._media.likes}<p>		
		<label class="like-btn">
		<input type="checkbox" name="button_like" id=${this._media.id}>
		<i class="fa-regular fa-heart like-unselected"></i>
		<i class="fa-solid fa-heart like-selected "></i>
		</label>
		</div>
		</div>
		`;
		card_title.innerHTML = content;

        const article = document.createElement('article');
		article.classList.add('media_card')
        article.appendChild(img);
        article.appendChild(card_title);
        return article;
    }


    // private
    // _stateLikesListener () {
    //   this.$wrapperCard.querySelector('input[type="checkbox"]').addEventListener('click', (e) => {
    //     if (e.target.checked) {
    //       this._media.likes += 1
    //     } else {
    //       this._media.likes -= 1
    //     }
    //     this.$wrapperCard.querySelector('label.favorite__counter').innerHTML = this._media.likes
    //     this.$wrapperCard.querySelector('input.favorite__input').setAttribute('aria-label', `${this._media.likes} j'aime`)
  
    //     // Rafraichie le le ContentPhotographerLink
    //     this._photographer.templatePhotographer.refreshPhotographerContentLink()
    //   })
    // }
  }