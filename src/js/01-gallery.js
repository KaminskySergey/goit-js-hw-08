// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";



import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainerRef = document.querySelector('.gallery')
const itemMarcupRef = createMapkupItems(galleryItems);
const itemRef = document.querySelector('.gallery__image');
console.log(itemRef)

galleryContainerRef.insertAdjacentHTML('beforeend', itemMarcupRef)


galleryContainerRef.addEventListener('click', onClickImg)

new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: 'alt' });

function createMapkupItems (items){
    return  items.map(({preview, original, description}) =>{
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
        </a>
        </div>
        `
        
    })
    .join("");
    


}

function onClickImg (evt){
evt.preventDefault()
if(!evt.target.classList.contains('gallery__image')){
    return;
    }
    console.log(evt.target);
}



