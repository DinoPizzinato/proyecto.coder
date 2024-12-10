let cartCount = 0;

// Función para agregar productos al carrito
function addToCart(productName, productPrice) {
  cartCount++;
  document.querySelector('.cart-count').textContent = cartCount;
  alert(`Se añadió ${productName}, Precio: ${productPrice} al carrito`);
}

// Asignamos el evento a los botones de "Agregar al carrito"
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const productName =
      button.parentElement.querySelector('.card-title').textContent;
    const productPrice =
      button.parentElement.querySelector('.price').textContent;
    addToCart(productName, productPrice);
  });
});

console.log('El script.js se ha cargado correctamente.');

// Obtener el botón y el campo de búsqueda
const buscarButton = document.querySelector('.Buscar');
const inputBusqueda = document.querySelector('.search-bar input');

// Agregar el evento de clic al botón de búsqueda
buscarButton.addEventListener('click', function () {
  const busqueda = inputBusqueda.value.trim();
  if (busqueda === '') {
    alert('Por favor, ingresa el producto que deseas buscar.');
  } else {
    alert('Buscando: ' + busqueda);
  }
});

document
  .getElementById('contact-form')
  .addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar el envío del formulario y recarga de página

    // Obtener los valores del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('mail').value;
    const message = document.getElementById('msg').value;

    // Validar campos
    if (name === '' || email === '' || message === '') {
      alert('Por favor, complete todos los campos.');
      return;
    }

    // Validar correo electrónico
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      alert('Por favor, ingrese un correo electrónico válido.');
      return;
    }

    // Mostrar mensaje de éxito
    alert(`Mensaje enviado correctamente. Gracias, ${name}!`);

    // Limpiar el formulario
    document.getElementById('contact-form').reset();
  });
document
  .getElementById('contact-form')
  .addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío del formulario

    const name = document.getElementById('name').value;
    const email = document.getElementById('mail').value;
    const message = document.getElementById('msg').value;

    if (name === '' || email === '' || message === '') {
      alert('Por favor, complete todos los campos.');
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      alert('Por favor, ingrese un correo electrónico válido.');
      return;
    }

    // Mostrar el modal de éxito
    const modal = document.getElementById('success-modal');
    modal.style.display = 'block';

    // Cerrar el modal cuando el usuario hace clic en la "X"
    document.querySelector('.close-btn').addEventListener('click', function () {
      modal.style.display = 'none';
    });

    // Limpiar el formulario
    document.getElementById('contact-form').reset();
  });
