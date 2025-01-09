let currentSlide = 1; // Empezamos en 1 porque clonamos la primera card al final
const slideInterval = 1000; // Cambia el slide cada 1 segundo

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slider-item');
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const totalSlides = slides.length;
    const visibleSlides = 3;

    // Clonamos la primera y la última tarjeta
    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[totalSlides - 1].cloneNode(true);

    // Añadimos el clon al final e inicio del slider
    sliderWrapper.appendChild(firstClone);
    sliderWrapper.insertBefore(lastClone, slides[0]);

    const clonedSlides = document.querySelectorAll('.slider-item');
    const clonedTotalSlides = clonedSlides.length;

    // Ajustamos la transición inicial
    sliderWrapper.style.transform = `translateX(-${(100 / visibleSlides)}%)`;

    // Función para mostrar el slide
    function showSlide(index) {
        if (index >= clonedTotalSlides - visibleSlides) {
            currentSlide = visibleSlides;
            sliderWrapper.style.transition = 'none';
            sliderWrapper.style.transform = `translateX(-${(100 / visibleSlides)}%)`;
            setTimeout(() => {
                sliderWrapper.style.transition = 'transform 0.5s ease-in-out';
            }, 0);
            return;
        } else if (index <= 0) {
            currentSlide = totalSlides;
            sliderWrapper.style.transition = 'none';
            sliderWrapper.style.transform = `translateX(-${(100 / visibleSlides) * totalSlides}%)`;
            setTimeout(() => {
                sliderWrapper.style.transition = 'transform 0.5s ease-in-out';
            }, 0);
            return;
        }

        currentSlide = index;
        const offset = -currentSlide * (100 / visibleSlides);
        sliderWrapper.style.transform = `translateX(${offset}%)`;
        updateIndicators(currentSlide - 1); // Indicadores se actualizan sin tener en cuenta los clones
    }

    // Función para ir al siguiente slide
    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    // Función para actualizar los indicadores
    function updateIndicators(index) {
        const indicators = document.querySelectorAll('.indicator');
        const totalIndicators = indicators.length;
        let activeIndex = index % totalIndicators;

        if (activeIndex < 0) {
            activeIndex += totalIndicators;
        }

        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === activeIndex);
        });
    }

    // Intervalo para cambiar el slide automáticamente
    setInterval(nextSlide, slideInterval);

    // Inicializamos el slider
    showSlide(currentSlide);
});
