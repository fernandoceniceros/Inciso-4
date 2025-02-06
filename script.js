// Inicializamos el índice de la imagen actual
let index = 0;

// Seleccionamos los elementos del carrusel
const images = document.querySelector('.carousel-images');
const totalImages = images.querySelectorAll('img').length;

// Función para avanzar 3 imágenes
function nextImage() {
    index = (index + 3) % totalImages; // Avanza 2 imágenes, y si llega al final, regresa al inicio
    updateCarousel();
}

// Función para retroceder 3 imágenes
function prevImage() {
    index = (index - 3 + totalImages) % totalImages; // Retrocede 2 imágenes, y si es menor a 0, vuelve al final
    updateCarousel();
}

// Función para actualizar la posición del carrusel
function updateCarousel() {
    images.style.transform = `translateX(-${index * 100}%)`;
}

// Asignamos los eventos de clic a los botones
document.querySelector('.next-btn').addEventListener('click', nextImage);
document.querySelector('.prev-btn').addEventListener('click', prevImage);

// Fernando Ceniceros  
// 05/02/25  
// Diseño Web 2