

/* CREATE ELEMENTS */
let serviceSourceLarge = document.createElement('source');
let serviceSourceMedium = document.createElement('source');
let serviceSourceSmall = document.createElement('source');
let serviceImgEl = document.createElement('img');
// let erickaImgEl = document.createElement('img');

/* SET ATTRIBUTES */
serviceSourceLarge.setAttribute('srcset', 'https://www.picsum.photos/750/250');
serviceSourceLarge.setAttribute('media', '(min-width: 1140px)');
serviceSourceMedium.setAttribute('srcset', 'https://www.picsum.photos/650/217');
serviceSourceMedium.setAttribute('media', '(min-width: 992px)');
serviceSourceSmall.setAttribute('srcset', 'https://www.picsum.photos/475/158');
serviceSourceSmall.setAttribute('media', '(min-width: 768px)');
serviceImgEl.setAttribute('src', 'https://www.picsum.photos/253/106');
serviceImgEl.setAttribute('alt', 'Cage Rage');
erickaImgEl.setAttribute('src', 'https://www.placecage.com/300/300');
// erickaImgEl.setAttribute('alt', 'Ericka');
// erickaImgEl.setAttribute('id', 'img-ericka');

/* ARRAY OF ELEMENTS WITH ATTRIBUTES SET */
let elems =  [serviceSourceLarge, serviceSourceMedium, serviceSourceSmall, serviceImgEl];

/* GRAB SERVICE-IMAGE CLASS ELEMENTS */
let serviceImage = document.getElementsByClassName('service-image');
// let erickaContainer = document.getElementById('ericka-container-fix');

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

// erickaContainer.appendChild(erickaImgEl);
