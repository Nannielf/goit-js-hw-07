import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
function markup(arr){
    return arr.map(({preview, original, description}) => `<li class="gallery__item">
    <a class="gallery__link" href="${original}" onclick="event.preventDefault()">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`).join('')
};
gallery.insertAdjacentHTML('afterbegin', markup(galleryItems));
gallery.addEventListener('click', takeClick);
function takeClick(evt){
    if(evt.target === evt.currentTarget) {
        return
    };

const imgSource = evt.target.dataset.source;
const image = galleryItems.find(({original})=> original === imgSource);

 const bigSize = basicLightbox.create (
    ` <img src="${image.original}" alt="${image.description}" />`,

    {
        onShow: (bigSize) => {
          window.addEventListener('keydown', prEsc);
        },
        onClose: (bigSize) => {
          window.removeEventListener('keydown', prEsc);
        },
      }
 );

 bigSize.show();

 function prEsc(evt) {
    if (evt.code !== 'Escape') {return}
    bigSize.close();
  }
 };

console.log(galleryItems);