import { getPhotographerById } from "../pages/photographer.js";

// to show media likes, update them, and compute/update total likes
export const showLikes = async () => {
    const { medias } = await getPhotographerById();

    // grab all like buttons
    const likeBtns = document.querySelectorAll(".btn_like");

    // grab like counter at the bottom of the page
    const likesElement = document.querySelector(".photographer_likes_count");

    const computeLikes = () => {
        // use reducer call-back to sum up all media.likes
        const totalLikes = medias.reduce((acc, media) => acc + media.likes, 0);
        likesElement.textContent = `${totalLikes}`;
    };

    // when loading the page, find total likes and show in html
    computeLikes();

    // add listener for each like button so that with every click
    likeBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const media = medias.find(media => media.id == btn.dataset.id);

            // update media.likes: if likes +1, else, -1
            !btn.classList.contains("liked") ? media.likes++ : media.likes--;

            // This is a switch between like and unlike:
            // add liked if not added, remove it if added
            btn.classList.toggle("liked");

            // change likes of the item in HTML
            const likesElement = btn.previousElementSibling;
            likesElement.textContent = `${media.likes}`;

            computeLikes();
        });
    });
};