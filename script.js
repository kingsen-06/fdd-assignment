const track = document.querySelector('.carousel-items');
const images = document.querySelectorAll('.carousel-items img');
const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");

let currentIndex = 0;

function updateCarousel() {
    const percentage = -(currentIndex * 100);
    track.style.transform = `translateX(${percentage}%)`;
};

leftButton.addEventListener("click", () => {
    currentIndex--
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    
    updateCarousel();
});

rightButton.addEventListener("click", () => {
    currentIndex++
    if (currentIndex > images.length - 1) {
        currentIndex = 0;
    }
    updateCarousel();
});