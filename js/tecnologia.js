
//Variables para el movimiento de la clase Proyectos
const imagenes1 = document.querySelectorAll('#imagenes_proyectos img'); // Selecciona todas las imágenes en el contenedor
const btnAnterior1 = document.getElementById('preview_p'); // Botón "Anterior"
const btnSiguiente1 = document.getElementById('next_p');   // Botón "Siguiente"
// Variables para el movimiento de la clase Organizaciones
const imagenes2 = document.querySelectorAll('#imagenes_organizaciones img'); // Selecciona todas las imágenes
const btnAnterior2 = document.getElementById('preview_o');
const btnSiguiente2 = document.getElementById('next_o');
//Variables para el movimiento de la clase Implementación
const imagenes3 = document.querySelectorAll('#imagenes_implementacion img'); // Selecciona todas las imágenes en el contenedor
const btnAnterior3 = document.getElementById('preview_i'); // Botón "Anterior"
const btnSiguiente3 = document.getElementById('next_i');   // Botón "Siguiente"
// Variables para el movimiento de la clase Testimonios
const imagenes4 = document.querySelectorAll('#imagenes_testimonios img'); // Selecciona todas las imágenes
const btnAnterior4 = document.getElementById('preview_t');
const btnSiguiente4 = document.getElementById('next_t');


//CODIGO PARA EL MOVIMIENTO DE LAS IMAGENES EN PROYECTOS
let indiceActual1 = 0; // Comienza mostrando la primera imagen (índice 0)

function mostrarImagen(indice) { // Función para mostrar la imagen en el índice actual
  imagenes1.forEach((img) => img.classList.remove('imagen-activa_p')); // Oculta todas las imágenes removiendo la clase 'imagen-activa'
  imagenes1[indice].classList.add('imagen-activa_p'); // Muestra solo la imagen en el índice actual añadiendo la clase 'imagen-activa'
}

btnAnterior1.addEventListener('click', () => { // Event listeners para el boton de anterior
  indiceActual1 = (indiceActual1 - 1 + imagenes1.length) % imagenes1.length; // Reduce el índice actual en 1, volviendo al final si llega al inicio
  mostrarImagen(indiceActual1); // Muestra la imagen correspondiente al nuevo índice
});

btnSiguiente1.addEventListener('click', () => { // Event listeners para el boton de siguiente
  indiceActual1 = (indiceActual1 + 1) % imagenes1.length; // Aumenta el índice actual en 1, volviendo al inicio si llega al final
  mostrarImagen(indiceActual1); // Muestra la imagen correspondiente al nuevo índice
});



// CODIGO PARA EL MOVIMENTO DE LAS IMAGENES EN ORGANIZACIONES
let indiceActual2 = 0; // Índice inicial de la imagen visible

function actualizarImagenes() { // Función para actualizar las imágenes visibles
  imagenes2.forEach((img) => img.classList.remove('imagenes-activas_1_o', 'imagenes-activas_2_o', 'imagenes-activas_3_o')); // Oculta todas las imágenes
  
  // Define los índices de las tres imágenes visibles
  const indice1 = indiceActual2 % imagenes2.length;
  const indice2 = (indiceActual2 + 1) % imagenes2.length;
  const indice3 = (indiceActual2 + 2) % imagenes2.length;

  // Asigna las clases para mostrar las tres imágenes visibles
  imagenes2[indice1].classList.add('imagenes-activas_1_o'); // Imagen izquierda
  imagenes2[indice2].classList.add('imagenes-activas_2_o'); // Imagen central
  imagenes2[indice3].classList.add('imagenes-activas_3_o'); // Imagen derecha
}

btnAnterior2.addEventListener('click', () => { // Event listener para el botón "Anterior"
  indiceActual2 = (indiceActual2 - 1 + imagenes2.length) % imagenes2.length; // Disminuye el índice actual y asegúrate de que sea positivo
  actualizarImagenes(); // Actualiza las imágenes visibles
});

btnSiguiente2.addEventListener('click', () => { // Event listener para el botón "Siguiente"
  indiceActual2 = (indiceActual2 + 1) % imagenes2.length; // Aumenta el índice actual
  actualizarImagenes(); // Actualiza las imágenes visibles
});

actualizarImagenes();// Inicializa las imágenes visibles al cargar la página


//CODIGO PARA EL MOVIMIENTO DE LAS IMAGENES EN IMPLEMENTACIÓN
let indiceActual3 = 0; // Comienza mostrando la primera imagen (índice 0)

function mostrarImagen3(indice) { // Función para mostrar la imagen en el índice actual
  imagenes3.forEach((img) => img.classList.remove('imagen-activa_i')); // Oculta todas las imágenes removiendo la clase 'imagen-activa'
  imagenes3[indice].classList.add('imagen-activa_i'); // Muestra solo la imagen en el índice actual añadiendo la clase 'imagen-activa'
}

btnAnterior3.addEventListener('click', () => { // Event listeners para el boton de anterior
  indiceActual3 = (indiceActual3 - 1 + imagenes3.length) % imagenes3.length; // Reduce el índice actual en 1, volviendo al final si llega al inicio
  mostrarImagen3(indiceActual3); // Muestra la imagen correspondiente al nuevo índice
});

btnSiguiente3.addEventListener('click', () => { // Event listeners para el boton de siguiente
  indiceActual3 = (indiceActual3 + 1) % imagenes3.length; // Aumenta el índice actual en 1, volviendo al inicio si llega al final
  mostrarImagen3(indiceActual3); // Muestra la imagen correspondiente al nuevo índice
});



// CODIGO PARA EL MOVIMENTO DE LAS IMAGENES EN TESTIMONIOS
let indiceActual4 = 0; // Índice inicial de la imagen visible

function actualizarImagenes4() { // Función para actualizar las imágenes visibles
  imagenes4.forEach((img) => img.classList.remove('imagenes-activas_1_t', 'imagenes-activas_2_t', 'imagenes-activas_3_t')); // Oculta todas las imágenes
  
  // Define los índices de las tres imágenes visibles
  const indice_1 = indiceActual4 % imagenes4.length;
  const indice_2 = (indiceActual4 + 1) % imagenes4.length;
  const indice_3 = (indiceActual4 + 2) % imagenes4.length;

  // Asigna las clases para mostrar las tres imágenes visibles
  imagenes4[indice_1].classList.add('imagenes-activas_1_t'); // Imagen izquierda
  imagenes4[indice_2].classList.add('imagenes-activas_2_t'); // Imagen central
  imagenes4[indice_3].classList.add('imagenes-activas_3_t'); // Imagen derecha
}

btnAnterior4.addEventListener('click', () => { // Event listener para el botón "Anterior"
  indiceActual4 = (indiceActual4 - 1 + imagenes4.length) % imagenes4.length; // Disminuye el índice actual y asegúrate de que sea positivo
  actualizarImagenes4(); // Actualiza las imágenes visibles
});

btnSiguiente4.addEventListener('click', () => { // Event listener para el botón "Siguiente"
  indiceActual4 = (indiceActual4 + 1) % imagenes4.length; // Aumenta el índice actual
  actualizarImagenes4(); // Actualiza las imágenes visibles
});

actualizarImagenes4();// Inicializa las imágenes visibles al cargar la página
