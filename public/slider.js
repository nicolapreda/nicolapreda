let currentSlide = 0;
const slider = document.getElementById('slider');
if (slider) {
    const slides = slider.getElementsByTagName('img');
    const totalSlides = slides.length;

    function showSlide(index) {
        if (index >= totalSlides) currentSlide = 0;
        else if (index < 0) currentSlide = totalSlides - 1;
        else currentSlide = index;

        // Simple horizontal scroll or hide/show
        // Based on "slider-wrapper" class, it might be a flex container with overflow hidden
        // Let's assume we just scroll it
        const slideWidth = slides[0].clientWidth;
        slider.scrollTo({
            left: currentSlide * slideWidth,
            behavior: 'smooth'
        });
    }

    window.nextSlide = function() {
        showSlide(currentSlide + 1);
    }

    window.prevSlide = function() {
        showSlide(currentSlide - 1);
    }
}
