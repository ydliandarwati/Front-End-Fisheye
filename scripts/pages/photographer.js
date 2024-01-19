//Mettre le code JavaScript lié à la page photographer.html

const searchParams = new URLSearchParams(window.location.search);
const photographer_id = searchParams.get('id'); 

function filterById(jsonObject, id) {
    return jsonObject.filter(function(jsonObject) {return (jsonObject['id'] == id);})[0];}

async function displayPhotographerById(id) {
        const photographerSection = document.querySelector(".photograph-header");
        const response = await fetch("./data/photographers.json");
        const data = await response.json(); 
        const { photographers } = { photographers: data.photographers };
        const photographers_id = photographers.map((item) => item.id);
        const photographer_id = filterById(photographers_id, id);
        console.log(photographer_id);
        // loop over photographer list
        // photographers.forEach((photographer) => {
        //     const photographerModel = photographerTemplate(photographer);
        //     console.log(photographerModel);
        //     const userCardDOM = photographerModel.getUserCardDOM();
        //     photographersSection.appendChild(userCardDOM);
        // });
    }

    displayPhotographerById(photographer_id);