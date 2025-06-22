
const images = [
    "upload/event1.jpg",
    "upload/event2.jpg",
    "upload/event3.jpg"
];

let currentIndex = 0;

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("event-image").src = images[currentIndex];
}
