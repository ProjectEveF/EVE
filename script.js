
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
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateImage();
    }
}

function prevImage() {
    if (currentIndex > 0) {
        currentIndex--;
        updateImage();
    }
}
