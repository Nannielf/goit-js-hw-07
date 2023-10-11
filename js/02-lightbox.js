import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
function markup(arr){
    return arr.map(({preview, original, description}) => `
    <li class="gallery__item">
   <a class="gallery__link" href="${original}" onclick="event.preventDefault()">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`).join('')
};
gallery.insertAdjacentHTML('afterbegin', markup(galleryItems));
new SimpleLightbox('.gallery__item a', { /* options */ });

console.log(galleryItems);
