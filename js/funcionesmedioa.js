const medioaData = [
    {
        name: "Cambio Climatico",
        description: "El principal desafío planetario es el cambio climático, ya que tiene amplios impactos en la calidad de vida de las personas y en los ecosistemas. A nivel local, por otro lado, se suma la contaminación atmosférica, por los riesgos asociados a salud.",
        image: "/images/contaminacion.jpg"
    },
    {
        name: "Salud",
        description: "La exposición a altos niveles de contaminación del aire puede provocar diversos efectos adversos para la salud, como un mayor riesgo de infecciones respiratorias, enfermedades cardíacas, accidentes cerebrovasculares y cáncer de pulmón. Estos problemas de salud afectan de manera desproporcionada a las poblaciones vulnerables y en situación de riesgo.",
        image: "/images/salud.png"
    },
    {
        name: "Destrucción de medio ambiente",
        description: " Pérdida de la calidad del agua y agotamiento de la misma. Destrucción de los ecosistemas y el medio ambiente. Desertificación y pérdida de la calidad del suelo. Aumento y extensión de enfermedades.",
        image: "/images/planeta.jpg"
    }
]

let currentMedioa = 0;

// Función para mostrar la especie actual con animación
function showSlidemedioa(index) {
    const titulo = document.getElementById("titulo");
    const descripcion = document.getElementById("parrafo");
    const image = document.getElementById("img_cont");

    titulo.textContent = medioaData[index].name;
    descripcion.textContent = medioaData[index].description;
    image.src = medioaData[index].image;
}

// Función para ir a la siguiente especie
function nextSlidecont() {
    currentMedioa = (currentMedioa + 1) % medioaData.length;
    showSlidemedioa(currentMedioa);
}

// Función para ir a la especie anterior
function prevSlidecont() {
    currentMedioa = (currentMedioa - 1 + medioaData.length) % medioaData.length;
    showSlidemedioa(currentMedioa);
}

// Mostrar la primera especie al cargar la página
showSlidemedioa(currentMedioa);