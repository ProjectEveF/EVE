
const images = [
    "upload/event1.jpg",
    "upload/event2.jpg",
    "upload/event3.jpg"
];

let currentIndex = 0;

function updateImage() {
    document.getElementById("event-image").src = images[currentIndex];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

window.onload = function() {
    document.getElementById("event-image").addEventListener("click", nextImage);
    updateImage();
};
