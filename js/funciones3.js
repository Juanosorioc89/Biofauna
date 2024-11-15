const Data = [
    {
        name: "Juan David Osorio",
        description: "Desarrollador backend aplicaciones Web",
        image: "/images/juanosorio.png"
    },
    {
        name: "María Paula Márquez",
        description: "Diseñadora Gráfica y Web, Desarrolladora web Investigadora de nuestro tema Fauna en colombia",
        image: ""
    },
    {
        name: "Jefferson",
        description: "Diseñadora Gráfica y Web, Desarrolladora web Investigadora de nuestro tema Fauna en colombia",
        image: "/images/jeffer.jpeg"
    },
    // Agrega más objetos según sea necesario
];

let currentIndex = 0;

// Función para mostrar la especie actual con animación
function showSlide(index) {
    const name = document.getElementById("name");
    const description = document.getElementById("description");
    const image = document.getElementById("image");

    // Añadir clase de fade para hacer un efecto de desvanecimiento
    name.classList.add("fade");
    description.classList.add("fade");
    image.classList.add("fade");

    // Esperar a que termine la animación de desvanecimiento y luego cambiar el contenido
    setTimeout(() => {
        name.textContent = Data[index].name;
        description.textContent = Data[index].description;
        image.src = Data[index].image;

        // Quitar la clase fade y añadir show para el efecto de aparición
        name.classList.remove("fade");
        description.classList.remove("fade");
        image.classList.remove("fade");

        name.classList.add("show");
        description.classList.add("show");
        image.classList.add("show");
    }, 500); // Tiempo de espera en milisegundos, que coincide con el tiempo de transición en CSS
}

// Función para ir a la siguiente especie
function nextSlide() {
    currentIndex = (currentIndex + 1) % Data.length;
    showSlide(currentIndex);
}

// Función para ir a la especie anterior
function prevSlide() {
    currentIndex = (currentIndex - 1 + Data.length) % Data.length;
    showSlide(currentIndex);
}

// Mostrar la primera especie al cargar la página
showSlide(currentIndex);
