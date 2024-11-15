const speciesData = [
    {
        name: "Oso de anteojos",
        description: "(Tremarctos ornatus) - Un oso que habita en los Andes y es considerado vulnerable.",
        image: "/images/oso.png"
    },
    {
        name: "Tigre de la Montaña",
        description: "(Leopardus guttulus) - Un felino endémico de la región andina, en peligro de extinción.",
        image: "/images/30.png"
    },
    {
        name: "Rana del Cauca",
        description: " (Ranitomeya reticulata) - Una rana pequeña y colorida que enfrenta amenazas por la pérdida de hábitat.",
        image: "/images/33.png"
    },

    {
        name: "Periquito de Santa Marta ",
        description: " (Bolborhynchus sp. nov.) - Un loro endémico de la Sierra Nevada de Santa Marta, en peligro crítico.",
        image: "/images/periquito.png"
    },

    {
        name: "Camarón de río del Magdalena ",
        description: "(Macrobrachium amazonicum) - Una especie de camarón que se encuentra en peligro por la contaminación y la pérdida de hábitat.",
        image: "/images/26.png"
    },

    {
        name: "Mono aullador negro",
        description: "(Alouatta caraya) - Aunque no es exclusivo de Colombia, sus poblaciones en el país están amenazadas.",
        image: "/images/20.png"
    },

    {
        name: "Mariposa Morfo",
        description: "(Morpho peleides) - Su hábitat está en peligro por la deforestación y la pérdida de ecosistemas.",
        image: "/images/21.png"
    },

    {
        name: "Rana cristal",
        description: "(Hyalinobatrachium fleischmanni) - Endémica de los bosques húmedos y amenazada por la destrucción de su hábitat.",
        image: "/images/6.png"
    },

    {
        name: "Tortuga de río",
        description: "(Podocnemis lewyana) - Esta tortuga es endémica y enfrenta amenazas por la caza y la pérdida de hábitat.",
        image: "/images/tortu.png"
    },

    {
        name: "Gato de los pajonales",
        description: "(Leopardus guigna) - Aunque su rango es más amplio, las poblaciones en Colombia están en peligro por la pérdida de hábitat.",
        image: "/images/23.png"
    },
    // Agrega más objetos según sea necesario
];

let currentIndex = 0;

// Función para mostrar la especie actual con animación
function showSlide(index) {
    const speciesName = document.getElementById("species-name");
    const speciesDescription = document.getElementById("species-description");
    const speciesImage = document.getElementById("species-image");

    // Añadir clase de fade para hacer un efecto de desvanecimiento
    speciesName.classList.add("fade");
    speciesDescription.classList.add("fade");
    speciesImage.classList.add("fade");

    // Esperar a que termine la animación de desvanecimiento y luego cambiar el contenido
    setTimeout(() => {
        speciesName.textContent = speciesData[index].name;
        speciesDescription.textContent = speciesData[index].description;
        speciesImage.src = speciesData[index].image;

        // Quitar la clase fade y añadir show para el efecto de aparición
        speciesName.classList.remove("fade");
        speciesDescription.classList.remove("fade");
        speciesImage.classList.remove("fade");

        speciesName.classList.add("show");
        speciesDescription.classList.add("show");
        speciesImage.classList.add("show");
    }, 500); // Tiempo de espera en milisegundos, que coincide con el tiempo de transición en CSS
}

// Función para ir a la siguiente especie
function nextSlide() {
    currentIndex = (currentIndex + 1) % speciesData.length;
    showSlide(currentIndex);
}

// Función para ir a la especie anterior
function prevSlide() {
    currentIndex = (currentIndex - 1 + speciesData.length) % speciesData.length;
    showSlide(currentIndex);
}

// Mostrar la primera especie al cargar la página
showSlide(currentIndex);





