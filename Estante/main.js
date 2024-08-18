let trilho = document.getElementById('trilho');
let indicador = document.getElementById('indicador');
let body = document.querySelector('body');

let classes = ['day', 'rainy', 'dark'];
let currentIndex = 0;

trilho.classList.add('day');
body.classList.add('day');

indicador.addEventListener('click', (event) => {
    event.stopPropagation(); 
    
    trilho.classList.remove(classes[currentIndex]);
    body.classList.remove(classes[currentIndex]);
    
    currentIndex = (currentIndex + 1) % classes.length;

    trilho.classList.add(classes[currentIndex]);
    body.classList.add(classes[currentIndex]);
});

const carouselImages = document.querySelector('.carousel-images');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let carouselIndex = 0;
const totalImages = document.querySelectorAll('.carousel-images img').length;
const visibleImages = 5; // Número de imagens visíveis no carrossel

nextBtn.addEventListener('click', () => {
  carouselIndex = (carouselIndex + 1) % totalImages;
  carouselImages.style.transform = `translateX(${(-carouselIndex * 75)}px)`;
});

prevBtn.addEventListener('click', () => {
  carouselIndex = (carouselIndex - 1 + totalImages) % totalImages;
  carouselImages.style.transform = `translateX(${(-carouselIndex * 75)}px)`;
});