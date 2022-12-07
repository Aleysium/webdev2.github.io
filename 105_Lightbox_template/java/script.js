
console

let lightboxContainer = document.getElementById('lightboxContainer');
let lightboxBackground = document.getElementById('lightboxBackground');
let lightbox = document.getElementByID('lightbox');
let lightboxCloser = document.getElementById('lightboxCloser');

//function to open lightbox
function openLightbox() {
    //Turn on display class
    lightboxContainer.classList.add('display');
    //Display img src inside lightbox
    lightbox.src = this.src;
}

let coffeeimage1 = document.getElementById('coffeeimage1');
let coffeeimage2 = document.getElementById('coffeeimage2');
let coffeeimage3 = document.getElementById('coffeeimage3');
let coffeeimage4 = document.getElementById('coffeeimage4');

//Closer

lightboxCloser.onclick = closeLightbox;
lightboxBackground.onclick = closeLightbox;


coffeeImage.onclick = openLightbox;