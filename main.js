/* CREATE ELEMENTS */
// let serviceSourceLarge = document.createElement('source');
let serviceSourceMedium = document.createElement('source');
let serviceSourceSmall = document.createElement('source');
let serviceImgEl = document.createElement('img');

/* SET ATTRIBUTES */
// serviceSourceLarge.setAttribute('srcset', 'https://www.picsum.photos/750/250');
// serviceSourceLarge.setAttribute('media', '(min-width: 1140px)');
// serviceSourceLarge.setAttribute('width', '750');
// serviceSourceLarge.setAttribute('height', '250');
serviceSourceMedium.setAttribute('srcset', 'https://www.picsum.photos/653/270');
serviceSourceMedium.setAttribute('media', '(min-width: 1320px)');
serviceSourceMedium.setAttribute('width', '653');
serviceSourceMedium.setAttribute('height', '270');
serviceSourceSmall.setAttribute('srcset', 'https://www.picsum.photos/475/158');
serviceSourceSmall.setAttribute('media', '(min-width: 768px)');
serviceSourceSmall.setAttribute('width', '475');
serviceSourceSmall.setAttribute('height', '158');
serviceImgEl.setAttribute('src', 'https://www.picsum.photos/253/106');
serviceImgEl.setAttribute('width', '253');
serviceImgEl.setAttribute('height', '106');
serviceImgEl.setAttribute('alt', 'Cage Rage');

/* ARRAY OF ELEMENTS WITH ATTRIBUTES SET */
let elems =  [/*serviceSourceLarge,*/ serviceSourceMedium, serviceSourceSmall, serviceImgEl];

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