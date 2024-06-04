function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);

    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

//////////////////////////////////////////////
/////////////////////////////////////////////

let currentIndex = 0;
const images = document.querySelectorAll('.slider img');

images[currentIndex].classList.add('active');

function nextImage() {
    images[currentIndex].classList.remove('active');

    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    images[currentIndex].classList.add('active');
}

function startSlider() {
    setInterval(nextImage, 3000);
}

window.onload = startSlider;