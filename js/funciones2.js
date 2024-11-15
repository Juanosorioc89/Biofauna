const imageElement = document.getElementById('povimages'); // Asegúrate de obtener el elemento de la imagen
let currentIndex2 = 0;  // Renombramos la variable aquí

const images2 = [
    '/images/_3f56bfa6-2fc8-405f-8688-f2503e2b7b73.jpg',
    '/images/_29ffec3d-0362-4f64-be93-a9f8e7839910.jpg',
    '/images/_221e4b33-e89d-45a0-ab16-444526d99271.jpg',
    '/images/_930736c0-ec98-4e37-bfc5-b2a2825b6311.jpg'
];

function updateImage2() {
    imageElement.src = images2[currentIndex2];
}

function nextSlide2() {
    currentIndex2 = (currentIndex2 + 1) % images2.length;
    updateImage2();
}

function prevSlide2() {
    currentIndex2 = (currentIndex2 - 1 + images2.length) % images2.length;
    updateImage2();
}

// Inicializa la primera imagen cuando se carga la página
window.onload = updateImage2;