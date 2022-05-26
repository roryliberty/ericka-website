/* CREATE ELEMENTS */
let sourceLarge = document.createElement('source');
let sourceMedium = document.createElement('source');
let sourceSmall = document.createElement('source');
let imgEl = document.createElement('img');

/* SET ATTRIBUTES */
sourceLarge.setAttribute('srcset', 'https://www.picsum.photos/750/250');
sourceLarge.setAttribute('media', '(min-width: 1140px)');
sourceMedium.setAttribute('srcset', 'https://www.picsum.photos/650/217');
sourceMedium.setAttribute('media', '(min-width: 992px)');
sourceSmall.setAttribute('srcset', 'https://www.picsum.photos/475/158');
sourceSmall.setAttribute('media', '(min-width: 768px)');
imgEl.setAttribute('src', 'https://www.picsum.photos/253/106');
imgEl.setAttribute('alt', 'Cage Rage');

/* ARRAY OF ELEMENTS WITH ATTRIBUTES SET */
let elems =  [sourceLarge, sourceMedium, sourceSmall, imgEl];

/* GRAB SERVICE-IMAGE CLASS ELEMENTS */
let serviceImage = document.getElementsByClassName('service-image');

/* CREATE DOCUMENT FRAGMENT */
let fragment = document.createDocumentFragment();

/* APPEND ELEMENTS TO DOCUMENT FRAGMENT */
for (let e = 0; e < elems.length; e++) {
    fragment.appendChild(elems[e]);
}

/* APPEND DOCUMENT FRAGMENT TO SERVICE IMAGE NODES */
for (let i = 0; i < serviceImage.length; i++) {
    serviceImage[i].appendChild(fragment.cloneNode(true));
}