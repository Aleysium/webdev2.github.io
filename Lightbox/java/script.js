


let lightboxContainer = document.getElementById('lightboxContainer');
let lightboxBackground = document.getElementById('lightboxBackground');
let lightbox = document.getElementById('lightbox');
let lightboxCloser = document.getElementById('lightboxCloser');

//function to open lightbox
function openLightbox() {
    //Turn on display class
    lightboxContainer.classList.add('display');
    //Display img src inside lightbox
    lightbox.src = this.src;
}

// let coffeeimage1 = document.getElementById('coffeeimage1');
// let coffeeimage2 = document.getElementById('coffeeimage2');
// let coffeeimage3 = document.getElementById('coffeeimage3');
// let coffeeimage4 = document.getElementById('coffeeimage4');


// coffeeimage1.onclick = openLightbox;
// coffeeimage2.onclick = openLightbox;
// coffeeimage3.onclick = openLightbox;
// coffeeimage4.onclick = openLightbox;

//Refined get image
let galleryImg = document.getElementsByClassName('galleryimg');
// Loop
for (let i = 0; i < galleryImg.length; i++) {
    let galleryImgs = galleryImg[i];
    galleryImgs.onclick = openLightbox;
}


//Closer
function closeLightbox(){
    lightboxContainer.classList.remove('display');
    lightbox.src = ''
}

lightboxCloser.onclick = closeLightbox;
lightboxBackground.onclick = closeLightbox;


coffeeImage.onclick = openLightbox;