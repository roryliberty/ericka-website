/* CREATE ELEMENTS */
let sourceOne = document.createElement('source');
let sourceTwo = document.createElement('source');
let sourceThree = document.createElement('source');
let imgEl = document.createElement('img');

/* SET ATTRIBUTES */
sourceOne.setAttribute('srcset', 'https://www.placecage.com/750/250');
sourceOne.setAttribute('media', '(min-width: 1140px)');
sourceTwo.setAttribute('srcset', 'https://www.placecage.com/650/217');
sourceTwo.setAttribute('media', '(min-width: 992px)');
sourceThree.setAttribute('srcset', 'https://www.placecage.com/475/158');
sourceThree.setAttribute('media', '(min-width: 768px)');
imgEl.setAttribute('src', 'https://www.placecage.com/253/106');
imgEl.setAttribute('alt', 'Cage Rage');

/* ARRAY OF ELEMENTS WITH ATTRIBUTES SET */
let elems =  [sourceOne, sourceTwo, sourceThree, imgEl];

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