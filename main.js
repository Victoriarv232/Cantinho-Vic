let trilho = document.getElementById('trilho');
let body = document.querySelector('body');

let classes = ['day', 'rainy', 'dark'];
let currentIndex = 0;

trilho.classList.add('day');
body.classList.add('day');

trilho.addEventListener('click', () => {

    trilho.classList.remove(classes[currentIndex]);
    body.classList.remove(classes[currentIndex]);
    
    currentIndex = (currentIndex + 1) % classes.length;

    trilho.classList.add(classes[currentIndex]);
    body.classList.add(classes[currentIndex]);
});
