const imgPlaceholder = document.querySelector('.img-placeholder');
const images = document.querySelectorAll('.slider-image');
let currentIndex = 0;

function updateSlider() {
    const offset = -currentIndex * 100; // Calculate the offset based on the current index
    imgPlaceholder.style.transform = `translateX(${offset}%)`;
}

document.getElementById('nextButton').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length; // Move to the next image
    updateSlider();
});

document.getElementById('prevButton').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Move to the previous image
    updateSlider();
});