const Data = [
    {
        name: "Juan David Osorio",
        description: "Desarrollador Backend de Aplicaciones Web en nuestro team Biofauna Colombia.",
        image: "../images/juanosorio.png"
    },
    {
        name: "María Paula Márquez",
        description: "Diseñadora Gráfica y Web que desempeña la función de Desarrolladora Web e Investigadora en nuestro team Biofauna colombia.",
        image: "../images/maria.jpeg"
    },
    {
        name: "Jefferson Ramirez",
        description: "Ingeniero Mecatrónico que desempeña la función de Scrum Master en nuestro team Biofauna Colombia",
        image: "../images/jeffer.jpeg"
    },
    {
        name: "Nikol Jansasoy",
        description: "Tec. Gestión Ambiental que desempeña la función de Desarrolladora Web e Investigadora en nuestro team Biofauna Colombia.",
        image: "../images/nikol.png"
    },
    {
        name: "Elena Palechor",
        description: "Desarrolladora Frontend que desempeña la función de Desarrolladora Web e Investigadora en nuestro team Biofauna Colombia.",
        image: "../images/elena.jpeg"
    },
    // Agrega más objetos según sea necesario
];

let currentIndexfotos = 0;

// Función para mostrar la especie actual con animación
function showSlideIndex(index) {
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
function nextSlideIndex() {
    currentIndexfotos = (currentIndexfotos + 1) % Data.length;
    showSlideIndex(currentIndexfotos);
}

// Función para ir a la especie anterior
function prevSlideIndex() {
    currentIndexfotos = (currentIndexfotos - 1 + Data.length) % Data.length;
    showSlideIndex(currentIndexfotos);
}

// Mostrar la primera especie al cargar la página
showSlideIndex(currentIndexfotos);
