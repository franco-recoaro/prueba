const imagenes = document.querySelectorAll('#slideshow img');
const botones = document.querySelectorAll('.botones button');

let indiceActual = 0;

function mostrarImagen(indice) {
  imagenes.forEach((imagen, i) => {
    imagen.style.display = i === indice ? 'block' : 'none';
  });
  botones.forEach((boton, i) => {
    boton.classList.remove('activo');
  });
  botones[indice].classList.add('activo');
}

mostrarImagen(indiceActual);

botones.forEach((boton, i) => {
  boton.addEventListener('click', () => {
    indiceActual = i;
    mostrarImagen(indiceActual);
  });
});

const enviar = document.querySelector('checkboxLegal');

function alert() {
  if (enviar.checked) {
    console.log("Checked");
  } else {
    console.log("Unchecked");
  }
}