document.addEventListener('DOMContentLoaded', function () {
    //constantes de navbar
    const marcaBtn = document.querySelector('.marca-btn');
    const containerItems = document.querySelector('.container-items');
    //constantes de carrusel
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const totalSlides = slides.length;
    let currentSlide = 0;

    // Navbar responsive
    marcaBtn.addEventListener('click', function () {
        containerItems.classList.toggle('active');
    });

    
    //carrusel de imagenes
    function updateCarousel() {
        const offset = -currentSlide * 100;
        document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
    }

    function goToPrevSlide() {
        currentSlide = (currentSlide > 0) ? currentSlide - 1 : totalSlides - 1;
        updateCarousel();
    }

    function goToNextSlide() {
        currentSlide = (currentSlide < totalSlides - 1) ? currentSlide + 1 : 0;
        updateCarousel();
    }

    function handleSlideClick(event) {
        const url = event.currentTarget.getAttribute('data-url');
        window.location.href = url;
    }

    slides.forEach(slide => {
        slide.addEventListener('click', handleSlideClick);
    });

    prevBtn.addEventListener('click', goToPrevSlide);
    nextBtn.addEventListener('click', goToNextSlide);

    // Auto-play functionality (optional)
    setInterval(goToNextSlide, 10000);
});