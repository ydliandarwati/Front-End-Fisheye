export const displayLightbox = medias => {

    const lightboxWrapper = document.querySelector('.lightbox_wrapper');
    const closeBtn = document.querySelector('.btn_close_lightbox');
    const prevBtn = document.querySelector('.btn_previous');
    const nextBtn = document.querySelector('.btn_next');
    const lightboxMedia = document.querySelector('.lightbox_media');
    const mediaProvider = Array.from(document.querySelectorAll('.media_card a'));

    const photographer = medias.photographer;
    const mediasList = medias.medias;
    let currentIndex = 0; 


    // even listener to show up lightbox after click
    mediaProvider.forEach(media => {
        media.addEventListener('click', () => {
            const mediaId = media.dataset.media;
            const mediaIndex = mediasList.findIndex(media => media.id == mediaId);
            currentIndex = mediaIndex;
            lightboxWrapper.style.display = 'flex'; // display lightbox
            closeBtn.focus(); // focus on close button X
            lightboxTemplate();
        });
    });
        
    const lightboxTemplate = () => {
        const currentMedia = mediasList[currentIndex];
        
        // create the lightbox content: image and caption
        lightboxMedia.innerHTML = `
            ${currentMedia.image ? `
            <img src="./assets/FishEye_Photos/${photographer.id}/${currentMedia.image}" alt="${currentMedia.alt}">` : 
            `<video controls aria-label="${currentMedia.alt}"><source src="./assets/FishEye_Photos/${photographer.id}/${currentMedia.video}" type="video/mp4"></video>`}

            <figcaption>${currentMedia.title}</figcaption>
        `;
    };
    
    const closeLightbox = () => {
        lightboxWrapper.style.display = 'none';
        lightboxMedia.innerHTML = '';
    };

    const nextMedia = () => {
        currentIndex++;
        if (currentIndex > mediasList.length - 1) currentIndex = 0;
        lightboxTemplate();
        showActiveBtn(nextBtn);
    };

    const previousMedia = () => {
        currentIndex--;
        if (currentIndex < 0) currentIndex = mediasList.length - 1;
        lightboxTemplate();
        showActiveBtn(prevBtn);
    };

    // highlight prev/next buttons when using arrow keys of keyboard
    const showActiveBtn = btn => {
        btn.classList.add('active');
        setTimeout(() => btn.classList.remove('active'), 100);
    };        
        
    document.addEventListener('keyup', e => {
        switch(e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                previousMedia();
                break;
            case 'ArrowRight':
                nextMedia();
                break;
        };
    });

    prevBtn.addEventListener('click', () => previousMedia()); // go to previous media
    nextBtn.addEventListener('click', () => nextMedia()); // go to next media when click on next
    closeBtn.addEventListener('click', () => closeLightbox()); // close lightbox
};