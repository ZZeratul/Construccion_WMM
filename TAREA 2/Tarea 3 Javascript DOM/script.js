
const images = [
    "images/LEONSITO1.jpg",
    "images/LEONSITO2.jpg",
    "images/LEONSITO3.jpg",
    "images/LEONSITO4.jpg",
    "images/LEONSITO5.jpg"
];


let currentIndex = 0;


function showImage() {
    const imageElement = document.getElementById('current-image');
    imageElement.src = images[currentIndex];
    document.getElementById('image-status').textContent = `Imagen ${currentIndex + 1} de ${images.length}`;


    document.getElementById('prev-btn').disabled = currentIndex === 0;
    document.getElementById('next-btn').disabled = currentIndex === images.length - 1;
}


function previousImage() {
    if (currentIndex > 0) {
        currentIndex--;
    }
    showImage();
}


function nextImage() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
    }
    showImage();
}

showImage();
