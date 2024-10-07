// Código para crear el carrito de compras con dos columnas y dropdown de cantidad

// Función para obtener los productos del carrito desde el almacenamiento local
function obtenerProductosCarrito() {
return JSON.parse(localStorage.getItem('carrito')) || [];
}

// Función para actualizar el carrito en el almacenamiento local
function actualizarCarritoStorage(carrito) {
localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Función para renderizar el carrito
function renderizarCarrito() {
const productContainer = document.getElementById('product-container');
const productos = obtenerProductosCarrito();

if (productos.length === 0) {
    productContainer.innerHTML = '<p>El carrito está vacío</p>';
    return;
}

let html = `
    <div class="carrito-container">
    <div class="carrito-productos">
        <h2>Tu carrito</h2>
`;

productos.forEach(producto => {
    html += `
    <div class="producto-carrito" data-id="${producto.id}">
        <img src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-info">
        <h3>${producto.titulo}</h3>
        <p>Precio: ${producto.precio}</p>
        <div class="cantidad-control">
            <button class="btn-cantidad" data-action="restar">-</button>
            <select class="cantidad-dropdown">
            ${[1,2,3,4,5].map(num => `<option value="${num}" ${num === producto.cantidad ? 'selected' : ''}>${num}</option>`).join('')}
            </select>
            <button class="btn-cantidad" data-action="sumar">+</button>
        </div>
        <button class="btn-eliminar">Eliminar</button>
        </div>
    </div>
    `;
});

html += `
    </div>
    <div class="carrito-resumen">
        <h2>Resumen del pedido</h2>
        <p>Total: $${calcularTotal(productos)}</p>
        <button id="btn-seguir-comprando">Seguir comprando</button>
        <button id="btn-finalizar-compra">Finalizar compra</button>
    </div>
    </div>
`;

productContainer.innerHTML = html;

  // Agregar event listeners
agregarEventListeners();
}

// Función para calcular el total
function calcularTotal(productos) {
  return productos.reduce((total, producto) => total + parseFloat(producto.precio.replace('$', '')) * producto.cantidad, 0).toFixed(2);
}

// Función para agregar event listeners
function agregarEventListeners() {
const productContainer = document.getElementById('product-container');

productContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-cantidad')) {
    const action = e.target.dataset.action;
    const productoElement = e.target.closest('.producto-carrito');
    const id = productoElement.dataset.id;
    actualizarCantidad(id, action);
    } else if (e.target.classList.contains('btn-eliminar')) {
    const productoElement = e.target.closest('.producto-carrito');
    const id = productoElement.dataset.id;
    eliminarProducto(id);
    }
});

productContainer.addEventListener('change', (e) => {
    if (e.target.classList.contains('cantidad-dropdown')) {
    const productoElement = e.target.closest('.producto-carrito');
    const id = productoElement.dataset.id;
    const nuevaCantidad = parseInt(e.target.value);
    actualizarCantidadDirecta(id, nuevaCantidad);
    }
});

document.getElementById('btn-seguir-comprando').addEventListener('click', () => {
    window.location.href = '/index.html';
});

document.getElementById('btn-finalizar-compra').addEventListener('click', () => {
    window.location.href = '../html/checkout.html';
});
}

// Función para actualizar la cantidad de un producto
function actualizarCantidad(id, action) {
const productos = obtenerProductosCarrito();
const producto = productos.find(p => p.id === id);
if (action === 'sumar') {
    producto.cantidad++;
} else if (action === 'restar' && producto.cantidad > 1) {
    producto.cantidad--;
}
actualizarCarritoStorage(productos);
renderizarCarrito();
}

// Función para actualizar la cantidad directamente desde el dropdown
function actualizarCantidadDirecta(id, nuevaCantidad) {
const productos = obtenerProductosCarrito();
const producto = productos.find(p => p.id === id);
producto.cantidad = nuevaCantidad;
actualizarCarritoStorage(productos);
renderizarCarrito();
}

// Función para eliminar un producto del carrito
function eliminarProducto(id) {
let productos = obtenerProductosCarrito();
productos = productos.filter(p => p.id !== id);
actualizarCarritoStorage(productos);
renderizarCarrito();
}

// Inicializar el carrito
document.addEventListener('DOMContentLoaded', renderizarCarrito);
